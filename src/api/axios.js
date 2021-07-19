import axios from "axios";

const axiosWeather = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api'
});

export default axiosWeather;