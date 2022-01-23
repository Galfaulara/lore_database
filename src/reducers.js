import { CHANGE_SEARCH_FIELD } from './constants'

const initialStateSearch = {
    searchField: ''
}

export const searchChampions = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state
    }
}