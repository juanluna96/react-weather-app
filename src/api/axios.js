import axios from "axios";

const axiosWeather = axios.create({
    baseURL: 'https://www.metaweather.com/api'
});

export default axiosWeather;