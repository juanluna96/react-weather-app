import React from 'react';
import { MainInfo } from '../../styles/main';
import { ButtonGrades } from '../../styles/weather';
import DaysWeatherList from './DaysWeather/DaysWeatherList';
import Statistics from './Statistics';

const MainWeather = () => {
    return (
        <MainInfo>
            <div className="flex justify-end">
                <ButtonGrades white="true">°C</ButtonGrades>
                <ButtonGrades>°F</ButtonGrades>
            </div>
            <DaysWeatherList></DaysWeatherList>
            <Statistics></Statistics>
        </MainInfo>
    )
}

export default MainWeather
