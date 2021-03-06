import {setPageChampion, setSearchInitial} from '../../actions'

import Banner from './Banner'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        championPage: state.setPage.championPage,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setPageChampion: (event) => dispatch(setPageChampion(event)),
        setSearchInitial: () => dispatch(setSearchInitial()),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Banner)