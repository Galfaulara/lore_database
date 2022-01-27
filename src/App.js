import './App.css'

import { handleDropdownClick, setSearchField } from './actions';
import { useEffect, useState } from 'react';

import Axios from 'axios';
import Background from './components/Background/Background';
import { ChampionCardList } from './components/ChampionCard/ChampionCardList';
import { DROP_MENU_TOGGLE } from './constants'
import { Menu } from './components/Menu/Menu';
import React from 'react';
import { click } from '@testing-library/user-event/dist/click';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchChampions.searchField,
    isDropdownvisible: state.toggleDropdown.isDropdownvisible

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    handleDropdownClick: () => dispatch(handleDropdownClick())

  }
}

function App(props) {
  const { onSearchChange, searchField, isDropdownvisible, handleDropdownClick } = props;

  const [championsDisplay, setChampionDisplay] = useState([]);
  // const [searchValue, setSearchValue] = useState('');

  let Champions = [];

  const getChampions = () => {
    Axios.get("http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json").then(
      (Response) => {

        // console.log(Response);

        Champions = Object.keys(Response.data.data).map((name) => {
          const champion = Response.data.data[name]

          return {
            name: champion.name,
            title: champion.title,
            id: champion.id,
          }


        });
        setChampionDisplay(Champions)
        console.log(Champions);
      }
    )
  }



  useEffect(() =>
    getChampions(), []
  )

  // const onSearchChange = (event) => {
  //   setSearchValue(event.target.value);
  //   console.log(event.target.value)
  // };


  const ChampionFilter = championsDisplay.filter(championDisplayed => {
    return (championDisplayed.name.toLowerCase().includes(searchField.toLowerCase()))

  })

  return (
    <div className='Content'>
      <Menu onSearchChange={onSearchChange} handleDropdownClick={handleDropdownClick} />
      <Background />
      <ChampionCardList Champions={ChampionFilter} />
      {console.log('1', isDropdownvisible)}
      {console.log('2', DROP_MENU_TOGGLE)}
    </div>

  );

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
