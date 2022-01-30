import ChampionCard from './ChampionCard'
import {connect} from 'react-redux'
import {setPageChampion} from '../../../actions'

const mapStateToProps = (state) => {
  return {
    championPage: state.setPage.championPage,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setPageChampion: (event) => dispatch(setPageChampion(event)),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChampionCard)
