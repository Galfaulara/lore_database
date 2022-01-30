import {
    CHANGE_SEARCH_FIELD,
    DROP_MENU_TOGGLE,
    SET_CHAMPION_PAGE,
    SET_HOME_PAGE,
    SET_SEARCH_INITIAL
} from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const setSearchInitial = () => (
    {
        type: SET_SEARCH_INITIAL,
        payload: ''
    }
)

export const handleDropdown = () => (
    {
        type: DROP_MENU_TOGGLE,
        payload: ''
    }
)

export const setPageHome = () => (
    console.log('setting homee'),

    {
        type: SET_HOME_PAGE,
        payload: ''
    }
)

export const setPageChampion = (champion) => (
    console.log(champion.name),

    {
        type: SET_CHAMPION_PAGE,
        payload: champion.name
    }
)
