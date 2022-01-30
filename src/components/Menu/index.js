import {handleDropdown, setPageHome} from '../../actions'

import {Menu} from './Menu'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        isDropdownvisible: state.toggleDropdown.isDropdownvisible,
        championPage: state.setPage.championPage,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleDropdown: () => dispatch(handleDropdown()),
        setPageHome: () => dispatch(setPageHome()),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
