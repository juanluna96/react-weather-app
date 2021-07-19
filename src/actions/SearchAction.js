import { SHOW_HIDE_SEARCHBAR, GET_CITIES_WEATHER, SAVE_SEARCH_VALUE } from '../types';
import axios from 'axios';

export const showHideSearchBarAction = (status) => async (dispatch) => {
    dispatch(showHideSearchBar(status));
};

export const saveSearchValueAction = (search) => async (dispatch) => {
    dispatch(saveSearchValue(search));
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

const saveSearchValue = (search) => {
    return ({
        type: SAVE_SEARCH_VALUE,
        payload: search
    })
}

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