import './App.css'

import {useEffect, useState} from 'react'

import Axios from 'axios'
import Background from './components/Background'
import ChampionCardList from './components/ChampionCardList'
import Menu from './components/Menu'
import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {setSearchField} from './actions'

const mapStateToProps = (state) => {
  return {
    searchField: state.searchChampions.searchField,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),

  }
}


const App = ({onSearchChange, searchField}) => {
  const [championsDisplay, setChampionDisplay] = useState([])
  let Champions = []

  const CHAMPIONS_URL = 'http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json'

  const getChampions = () => {
    Axios.get(CHAMPIONS_URL).then(
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


  useEffect(() =>
    getChampions(), [],
  )

  const ChampionFilter = championsDisplay.filter((championDisplayed) => {
    return (
      championDisplayed.name.toLowerCase().includes(searchField.toLowerCase())
    )
  })


  return (
      <div className='Content'>
        <Menu onSearchChange={onSearchChange} />
        <Background />
        <ChampionCardList champions={ChampionFilter} />
      </div>
  )
}

App.defaultProps = {
  searchField: '',
}

App.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  searchField: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
