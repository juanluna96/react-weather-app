import axios from "axios";
import { GET_ID_WEATHER } from '../types';

export const getWeatherAction = (id = "2459115") => async (dispatch) => {
    try {
        const url = `https://www.metaweather.com/api/location/${id}/`;
        const response = await axios.get(url);
        dispatch(getWeather(response.data));
    } catch (error) {
        console.error(error);
    }
};

export const getWeatherGeoLocationAction = (latitude, longitude) => async (dispatch) => {
    try {
        const url = `https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`;
        const response = await axios.get(url);
        dispatch(getWeatherAction(response.data[0].woeid));
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