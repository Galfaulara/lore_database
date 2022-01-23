import { Menu } from './components/Menu/Menu';
import { ChampionCardList } from './components/ChampionCard/ChampionCardList';
import Background from './components/Background/Background';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import './App.css'
import { setSearchField } from './actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

function App(props) {
  const { onSearchChange, searchField } = props;

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
  );

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
