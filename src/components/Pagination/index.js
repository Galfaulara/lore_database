import {handleDropdown, setPageHome, setSearchField} from '../../actions'

import Pagination from './Pagination'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        isDropdownvisible: state.toggleDropdown.isDropdownvisible,
        championPage: state.setPage.championPage,
        searchField: state.searchChampions.searchField,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleDropdown: () => dispatch(handleDropdown()),
        setPageHome: () => dispatch(setPageHome()),
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)