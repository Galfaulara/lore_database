import {
    CHANGE_SEARCH_FIELD,
    DROP_MENU_TOGGLE,
    SET_CHAMPION_PAGE,
    SET_HOME_PAGE
} from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const handleDropdown = () => (
    {
        type: DROP_MENU_TOGGLE,
        payload: ''
    }
)

export const setPageHome = () => (
    {
        type: SET_HOME_PAGE,
        payload: ''
    }
)

export const setPageChampion = () => (
    {
        type: SET_CHAMPION_PAGE,
        payload: ''
    }
)
