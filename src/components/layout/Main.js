import React, { useEffect } from 'react'
import { Container } from '../styles/main'
import Sidebar from './sidebar/Sidebar';
import MainWeather from './weather/MainWeather';
import SearchSideBar from './sidebar/Search/SearchSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherAction } from '../../actions/WeatherAction';

const Main = () => {
    const searchBar = useSelector(state => state.search.searchBar);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeatherAction());
    }, []);

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
