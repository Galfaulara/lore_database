import {
    CHANGE_SEARCH_FIELD,
    DROP_MENU_TOGGLE,
    SET_CHAMPION_PAGE,
    SET_HOME_PAGE
} from './constants'

const initialStateSearch = {
    searchField: ''
}

const initialToggle = {
    isDropdownvisible: false,
}

const initialPage = {
    championPage: '',
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

export const setPage = (state = initialPage, action = {}) => {

    switch (action.type) {
        case SET_HOME_PAGE:
            return Object.assign({}, state, { championPage: 'home' });
        case SET_CHAMPION_PAGE:
            return Object.assign({}, state, { championPage: 'notHome' })
        default:
            return state
    }

}

