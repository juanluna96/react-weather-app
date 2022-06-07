import { SHOW_HIDE_SEARCHBAR, GET_CITIES_WEATHER, SAVE_SEARCH_VALUE } from '../types';

const initialState = {
    searchBar: false,
    cities: [],
    searched: false,
    value: ''
}

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SHOW_HIDE_SEARCHBAR:
            return { ...state, searchBar: !payload }

        case GET_CITIES_WEATHER:
            return { ...state, cities: payload }

        case SAVE_SEARCH_VALUE:
            return { ...state, value: payload }

        default:
            return state
    }
}
