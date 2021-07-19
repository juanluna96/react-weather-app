import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainInfo } from '../../styles/main';
import { ButtonGrades } from '../../styles/weather';
import DaysWeatherList from './DaysWeather/DaysWeatherList';
import Statistics from './Statistics';
import { changeWeatherTemperatureAction } from '../../../actions/WeatherAction';

const temperatures = [
    { id: 1, title: '°C' },
    { id: 2, title: '°F' }
]

const MainWeather = () => {
    const currentTemperature = useSelector(state => state.weather.currentTemperature);
    const dispatch = useDispatch();

    const onChangeTemperature = (value) => {
        if (currentTemperature === value) return;
        dispatch(changeWeatherTemperatureAction(value));
    }

    return (
        <MainInfo>
            <div className="flex justify-end">
                {
                    temperatures.map((temperature) => (
                        <ButtonGrades key={ temperature.id } onClick={ () => onChangeTemperature(temperature.title) } active={ currentTemperature === temperature.title ? true : false }>{ temperature.title }</ButtonGrades>
                    ))
                }
            </div>
            <DaysWeatherList></DaysWeatherList>
            <Statistics></Statistics>
        </MainInfo>
    )
}

export default MainWeather
