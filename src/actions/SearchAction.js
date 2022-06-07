import { SHOW_HIDE_SEARCHBAR, GET_CITIES_WEATHER, SAVE_SEARCH_VALUE } from '../types';
import axiosCities from "../api/cities_api";

export const showHideSearchBarAction = (status) => async (dispatch) => {
    dispatch(showHideSearchBar(status));
};

export const saveSearchValueAction = (search) => async (dispatch) => {
    dispatch(saveSearchValue(search));
};

export const getCitiesNearbyAction  = (latitude, longitude) => async (dispatch) => {
    const url = `/locations/${latitude}${longitude}/nearbyCities`;
    try {
        const response = await axiosCities.get(url);
        dispatch(getCitiesWeather(response.data.data));
    } catch (error) {
        console.error(error);
    }
}

export const searchCitiesWeatherAction = (search) => async (dispatch) => {
    try {
        const url = '/cities';
        const response = await axiosCities.get(url, {
            params: {
                namePrefix: search
            }
        });
        dispatch(getCitiesWeather(response.data.data));
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
