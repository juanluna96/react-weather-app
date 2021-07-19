import { SHOW_HIDE_SEARCHBAR, GET_CITIES_WEATHER } from '../types';
import axios from 'axios';

export const showHideSearchBarAction = (status) => async (dispatch) => {
    dispatch(showHideSearchBar(status));
};

export const searchCitiesWeatherAction = (search) => async (dispatch) => {
    try {
        const url = `https://www.metaweather.com/api/location/search/?query=${search}`;
        const response = await axios.get(url);
        dispatch(getCitiesWeather(response.data));
    } catch (error) {
        console.error(error);
    }
};

const getCitiesWeather = (cities) => {
    return ({
        type: GET_CITIES_WEATHER,
        payload: cities
    })
}

const showHideSearchBar = (status) => {
    return ({
        type: SHOW_HIDE_SEARCHBAR,
        payload: status
    })
}