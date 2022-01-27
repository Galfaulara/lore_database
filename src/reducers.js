import { CHANGE_SEARCH_FIELD } from './constants'
import { DROP_MENU_TOGGLE } from './constants'

const initialStateSearch = {
    searchField: ''
}

const initialToggle = {
    isDropdownvisible: false,
}

export const searchChampions = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state
    }
}

export const toggleDropdown = (state = initialToggle, action = {}) => {

    if (action.Type && state.isDropdownvisible === false) {

        return Object.assign({}, state, { isDropdownvisible: true })

    }

    else if (action.Type && state.isDropdownvisible === true) {
        return Object.assign({}, state, { isDropdownvisible: false })
    }

    else {
        return state
    }

}
