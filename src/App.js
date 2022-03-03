import './App.css'

import React, {useEffect, useState} from 'react'

import Axios from 'axios'
import Background from './components/Background'
import {CHAMPS_URL} from './constants'
import ChampionCardList from './components/ChampionCardList'
import Menu from './components/Menu'
import Pagination from './components/Pagination'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setSearchField} from './actions'

const App = ({onSearchChange, searchField}) => {
  const [championsDisplay, setChampionDisplay] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [championsPerPage, setChampionsPerPage] = useState(0);

  const getChampions = async () => {
    const CHAMPS_DATA = await Axios.get(CHAMPS_URL); 


      const Champions = Object.keys(CHAMPS_DATA.data.data).map((name) => {
        const champion = CHAMPS_DATA.data.data[name]
        
        return {
          name: champion.name,
          title: champion.title,
          id: champion.id,
          blurb: champion.blurb
        }

        
      })//Map End    

      const dbresponse = await Axios.post('http://localhost:3000/', Champions)
      console.log(dbresponse.data)
    setChampionDisplay(Champions);

   return true;
  };


  useEffect(() =>
  getChampions(), [],
)



useEffect(() =>
setCurrentPage(1), [searchField],
)

useEffect(() =>
setChampionsPerPage(championsPerPageCalc), [searchField],
)
  const championsPerPageCalc = window.innerWidth/125;
  const indexOfLastChampion = currentPage * championsPerPage;
  const indexOfFirstChampion = indexOfLastChampion - championsPerPage;
  const ChampionFilter = championsDisplay.filter((championDisplayed) => {
    return (
      championDisplayed.name.toLowerCase().includes(searchField.toLowerCase())
    )
  })

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const currentChampions = ChampionFilter.slice(indexOfFirstChampion, indexOfLastChampion);
 
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
