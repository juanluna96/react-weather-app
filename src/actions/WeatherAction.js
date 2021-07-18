import axios from "axios";
import { GET_ID_WEATHER } from '../types';

export const getWeatherAction = (id = "368148") => async (dispatch) => {
    try {
        const url = `https://www.metaweather.com/api/location/${id}/`;
        const response = await axios.get(url);
        dispatch(getWeather(response.data));
    } catch (error) {
        console.error(error);
    }
};

const getWeather = (weather) => {
    return ({
        type: GET_ID_WEATHER,
        payload: weather
    })
}