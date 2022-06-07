import { CHANGE_TEMPERATURE_TYPE, GET_CURRENT_WEATHER, GET_NEXT_DAYS_WEATHER} from '../types';
import axiosWeather from "../api/axios";

export const getWeatherGeoLocationAction = (latitude, longitude) => async (dispatch) => {
    try {
        // Aproximate to lower and 2 decimals latitude and longitude
        let lat = Math.floor(latitude * 100) / 100;
        let lon = Math.floor(longitude * 100) / 100;
        const url = `weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env["REACT_APP_WEATHER_API_KEY"]}`;
        const url_next = `forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env["REACT_APP_WEATHER_API_KEY"]}`;
        // Promise to get the weather and the next 5 days weather
        const [weather, nextWeathers] = await Promise.all([axiosWeather.get(url), axiosWeather.get(url_next)]);
        // Dispatch the weather and the next 5 days weather
        dispatch(getWeather(weather.data));
        // Get next 5 days weather at middle of the day including tomorrow
        const nextWeathersData = nextWeathers.data.list.filter(item => item.dt_txt.includes('12:00:00'));
        dispatch(nextWeather(nextWeathersData));
    } catch (error) {
        console.error(error);
    }
};

export const changeWeatherTemperatureAction = temperature => dispatch => {
    dispatch(changeTemperature(temperature));
};

const changeTemperature = (temperature) => {
    return ({
        type: CHANGE_TEMPERATURE_TYPE,
        payload: temperature
    })
}

const getWeather = (weather) => {
    return ({
        type: GET_CURRENT_WEATHER,
        payload: weather
    })
}

const nextWeather = (weathers) => {
    return ({
        type: GET_NEXT_DAYS_WEATHER,
        payload: weathers
    })
}
