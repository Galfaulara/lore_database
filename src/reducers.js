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

    switch (action.type) {
        case DROP_MENU_TOGGLE:
            return Object.assign({}, state, { isDropdownvisible: !state.isDropdownvisible })
        default:
            return state
    }

}
