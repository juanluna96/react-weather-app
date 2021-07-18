import { SHOW_HIDE_SEARCHBAR } from '../types';

const initialState = {
    searchBar: false,
    cities: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SHOW_HIDE_SEARCHBAR:
            return { ...state, ...payload }

        default:
            return state
    }
}
