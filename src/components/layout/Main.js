import React, { useEffect } from 'react'
import { Container } from '../styles/main'
import Sidebar from './sidebar/Sidebar';
import MainWeather from './weather/MainWeather';
import SearchSideBar from './sidebar/Search/SearchSideBar';
import { useDispatch } from 'react-redux';
import { getWeatherAction } from '../../actions/WeatherAction';

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeatherAction());
    }, []);

    return (
        <Container>
            {/* <SearchSideBar></SearchSideBar> */ }
            <Sidebar></Sidebar>
            <MainWeather></MainWeather>
        </Container>
    )
}

export default Main
