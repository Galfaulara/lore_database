import { Menu } from './Menu'
import { connect } from 'react-redux';
import { handleDropdownClick } from '../../actions'

const mapStateToProps = (state) => {
    return {
        isDropdownvisible: state.toggleDropdown.isDropdownvisible

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleDropdownClick: () => dispatch(handleDropdownClick())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)