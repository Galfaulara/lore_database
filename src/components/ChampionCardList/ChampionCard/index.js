import { ChampionCard } from './ChampionCard'
import { connect } from 'react-redux';
import { setPageChampion } from '../../../actions'

const mapStateToProps = (state) => {
    return {
        isDropdownvisible: state.toggleDropdown.isDropdownvisible,
        championPage: state.setPage.championPage

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setPageChampion: () => dispatch(setPageChampion())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionCard);