import './App.css'

import {setPageChampion, setSearchField} from './actions'
import {useEffect, useState} from 'react'

import Axios from 'axios'
import Background from './components/Background'
import {CHAMPS_URL} from './constants'
import ChampionCardList from './components/ChampionCardList'
import ChampionDetail from './components/ChampionDetail'
import Menu from './components/Menu'
import Pagination from './components/Pagination'
import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'

const App = ({onSearchChange, searchField, championPage}) => {
  let Champions = []
  const [championsDisplay, setChampionDisplay] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [championsPerPage, setChampionsPerPage] = useState(0);

  const getChampions = () => {
    Axios.get(CHAMPS_URL).then(
        (Response) => {
          // console.log(Response)

          Champions = Object.keys(Response.data.data).map((name) => {
            const champion = Response.data.data[name]

            return {
              name: champion.name,
              title: champion.title,
              id: champion.id,
            }
          })
          setChampionDisplay(Champions)
          console.log(Champions)
        },
    )
  }

  const championsPerPageCalc = window.innerWidth/125;

  useEffect(() =>
    getChampions(), [],
  )

  useEffect(() =>
  setCurrentPage(1), [searchField],
)

useEffect(() =>
setChampionsPerPage(championsPerPageCalc), [searchField],
)



  const ChampionFilter = championsDisplay.filter((championDisplayed) => {
    return (
      championDisplayed.name.toLowerCase().includes(searchField.toLowerCase())
    )
  })

  const indexOfLastChampion = currentPage * championsPerPage;
  const indexOfFirstChampion = indexOfLastChampion - championsPerPage;
  const currentChampions = ChampionFilter.slice(indexOfFirstChampion, indexOfLastChampion);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
 


  
  




  return (
    
      <div className='Content'>
        <Menu onSearchChange={onSearchChange} />
        <Background/>
        <ChampionCardList champions={currentChampions}/>
        <Pagination
        championsPerPage={championsPerPage}
        totalChampions={ChampionFilter.length}
        paginate={paginate}
        setPage={setCurrentPage}
        currentPage={currentPage}
      />

      </div>
   
  )
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchChampions.searchField,
    championPage: state.setPage.championPage,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),

  }
}

App.defaultProps = {
  searchField: '',
}

App.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  searchField: PropTypes.string.isRequired,

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
