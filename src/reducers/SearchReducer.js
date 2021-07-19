import { SHOW_HIDE_SEARCHBAR, GET_CITIES_WEATHER } from '../types';

const initialState = {
    searchBar: false,
    cities: [],
    searched: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SHOW_HIDE_SEARCHBAR:
            return { ...state, searchBar: !payload }

        case GET_CITIES_WEATHER:
            return { ...state, cities: payload, searched: true }

        default:
            return state
    }
}
