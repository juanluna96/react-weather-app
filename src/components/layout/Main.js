import React from 'react'
import { Container } from '../styles/main'
import Sidebar from './sidebar/Sidebar';
import MainWeather from './weather/MainWeather';
import SearchSideBar from './sidebar/Search/SearchSideBar';

const Main = () => {
    return (
        <Container>
            {/* <SearchSideBar></SearchSideBar> */ }
            <Sidebar></Sidebar>
            <MainWeather></MainWeather>
        </Container>
    )
}

export default Main
