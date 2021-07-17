import React from 'react'
import { Container } from '../styles/main'
import Sidebar from './sidebar/Sidebar';
import MainWeather from './weather/MainWeather';

const Main = () => {
    return (
        <Container>
            <Sidebar></Sidebar>
            <MainWeather></MainWeather>
        </Container>
    )
}

export default Main
