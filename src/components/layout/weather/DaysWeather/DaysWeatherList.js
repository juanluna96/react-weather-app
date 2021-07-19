import React from 'react'
import { useSelector } from 'react-redux';
import DayDetail from './DayDetail';

const DaysWeatherList = () => {
    const days = useSelector(state => state.weather.nextDays);

    return (
        <div className="grid grid-cols-2 mt-10 md:grid-cols-5 gap-x-6 gap-y-4 md:gap-y-0 md:justify-end">
            {
                days.map((day, index) => (
                    <DayDetail key={ index } day={ day } index={ index }></DayDetail>
                ))
            }
        </div>
    )
}

export default DaysWeatherList
