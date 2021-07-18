import React, { useEffect, useState } from 'react'
import { WeatherAPI } from '../../../../content';
import DayDetail from './DayDetail';

const DaysWeatherList = () => {
    const [days, setDays] = useState([]);
    const { consolidated_weather } = WeatherAPI;

    useEffect(() => {
        const [, ...rest] = consolidated_weather;
        setDays(rest);
    }, []);

    return (
        <div className="grid mt-10 md:grid-cols-5 gap-x-6 gap-y-4 md:gap-y-0 md:justify-end">
            {
                days.map((day, index) => (
                    <DayDetail key={ index } day={ day } index={ index }></DayDetail>
                ))
            }
        </div>
    )
}

export default DaysWeatherList
