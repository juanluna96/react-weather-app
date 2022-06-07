import {GET_CURRENT_WEATHER, CHANGE_TEMPERATURE_TYPE, GET_NEXT_DAYS_WEATHER} from '../types';
const initialState = {
    today: null,
    city: '',
    nextDays: [],
    currentTemperature: '°C'
}

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CURRENT_WEATHER:
            return {
                ...state,
                today: payload
            }

        case GET_NEXT_DAYS_WEATHER:
            return { ...state, nextDays: payload }

        case CHANGE_TEMPERATURE_TYPE:
            return { ...state, currentTemperature: payload }

        default:
            return state
    }
}
