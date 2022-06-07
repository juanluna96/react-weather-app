import axios from "axios";

const axiosCities = axios.create({
    baseURL: process.env["REACT_APP_CITIES_API"],
    headers:{
        'X-RapidAPI-Host':process.env["REACT_APP_CITIES_API_HOST"],
        'X-RapidAPI-Key':process.env["REACT_APP_CITIES_API_KEY"]
    }
})

export default axiosCities
