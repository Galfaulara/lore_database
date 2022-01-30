import './App.css'

import { useEffect, useState } from 'react';

import Axios from 'axios';
import Background from './components/Background';
import { CHAMPS_URL } from './constants';
import ChampionCardList from './components/ChampionCardList';
import Menu from './components/Menu';
import React from 'react';
import { connect } from 'react-redux';
import { setSearchField } from './actions';

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




function App(props) {
  const { onSearchChange, searchField } = props;

  const [championsDisplay, setChampionDisplay] = useState([]);
  // const [searchValue, setSearchValue] = useState('');

  let Champions = [];



  const getChampions = () => {
    Axios.get(CHAMPS_URL).then(
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
      <Menu onSearchChange={onSearchChange} />
      <Background />
      <ChampionCardList Champions={ChampionFilter} />
    </div>

  );

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
