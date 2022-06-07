import React, {  useEffect } from 'react'
import { Container } from '../styles/main'
import Sidebar from './sidebar/Sidebar';
import MainWeather from './weather/MainWeather';
import SearchSideBar from './sidebar/Search/SearchSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherGeoLocationAction} from '../../actions/WeatherAction';
import {getCitiesNearbyAction} from "../../actions/SearchAction";
import Spinner from "./Spinner/Spinner";

const Main = () => {
    const today = useSelector(state => state.weather.today);
    const searchBar = useSelector(state => state.search.searchBar);
    const dispatch = useDispatch();

    const initialLocation = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            dispatch(getWeatherGeoLocationAction(latitude, longitude));
            dispatch(getCitiesNearbyAction(latitude, longitude));
        });
    }

    useEffect(() => {
        initialLocation();
    }, []);

    if (!today) return (
        <Container>
            <Spinner />
        </Container>
    )

    return (
        <Container>
            {
                searchBar
                    ? <SearchSideBar></SearchSideBar>
                    : <Sidebar></Sidebar>
            }
            <MainWeather></MainWeather>
        </Container>
    )
}

export default Main
