import { CHANGE_SEARCH_FIELD, DROP_MENU_TOGGLE } from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const handleDropdownClick = (val) => (
    {
        type: DROP_MENU_TOGGLE,
        payload: val
    }
)
