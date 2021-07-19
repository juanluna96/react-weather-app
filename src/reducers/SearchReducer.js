import { SHOW_HIDE_SEARCHBAR, GET_CITIES_WEATHER, SAVE_SEARCH_VALUE } from '../types';

const initialState = {
    searchBar: false,
    cities: [],
    searched: false,
    value: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SHOW_HIDE_SEARCHBAR:
            return { ...state, searchBar: !payload }

        case GET_CITIES_WEATHER:
            return { ...state, cities: payload, searched: true }

        case SAVE_SEARCH_VALUE:
            return { ...state, value: payload }

        default:
            return state
    }
}
