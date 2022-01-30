import {
    CHANGE_SEARCH_FIELD,
    DROP_MENU_TOGGLE,
    SET_CHAMPION_PAGE,
    SET_HOME_PAGE,
    SET_SEARCH_INITIAL,
} from './constants'

const initialStateSearch = {
    searchField: '',
}

const initialToggle = {
    isDropdownvisible: false,
}

const initialPage = {
    championPage: 'home',
}

export const searchChampions = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
        case SET_SEARCH_INITIAL:
            return Object.assign({}, state, {searchField: ''})
        default:
            return state
    }
}

export const toggleDropdown = (state = initialToggle, action = {}) => {
    switch (action.type) {
        case DROP_MENU_TOGGLE:
            return Object.assign(
                {}, state, {isDropdownvisible: !state.isDropdownvisible})
        default:
            return state
    }
}

export const setPage = (state = initialPage, action = {}) => {
    switch (action.type) {
        case SET_HOME_PAGE:
            return Object.assign({}, state, {championPage: action.payload})
        case SET_CHAMPION_PAGE:
            return Object.assign({}, state, {championPage: action.payload})


        default:
            return state
    }
}

