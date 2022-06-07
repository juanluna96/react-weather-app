import axios from "axios";

const axiosWeather = axios.create({
    baseURL: process.env["REACT_APP_WEATHER_API"]
});

export default axiosWeather


