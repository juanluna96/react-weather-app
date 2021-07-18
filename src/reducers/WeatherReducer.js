import { GET_ID_WEATHER } from '../types';
const initialState = {
    today: {
        weather_state_name: "Light Cloud",
        applicable_date: Date.now(),
        the_temp: 0,
        humidity: 0,
        wind_direction_compass: '',
        visibility: 0,
        wind_speed: 0,
        air_pressure: 0
    },
    city: '',
    nextDays: [],
    currentTemperature: '°C'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_ID_WEATHER:
            const { title } = payload;
            const [today] = payload.consolidated_weather;
            const [, ...rest5days] = payload.consolidated_weather;
            return { ...state, today: today, city: title, nextDays: rest5days }

        default:
            return state
    }
}
