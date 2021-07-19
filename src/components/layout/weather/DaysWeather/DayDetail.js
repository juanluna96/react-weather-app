import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { DayContainer, DayText } from '../../../styles/weather';
import Moment from 'react-moment';
import { useSelector } from 'react-redux';

const DayDetail = ({ day, index }) => {
    const currentTemperature = useSelector(state => state.weather.currentTemperature);
    const { applicable_date, weather_state_name, max_temp, min_temp } = day;

    const convertTemperature = (temp) => {
        switch (currentTemperature) {
            case "°C":
                var newT = temp;
                break;
            case "°F":
                var newT = temp * 1.8 + 32;
                break;
            default:
                break;
        }
        return Math.round(newT);
    };

    return (
        <DayContainer>
            <DayText title="true">
                {
                    index === 0
                        ? 'Tomorrow'
                        : <Moment format="ddd, DD MMM" date={ applicable_date } />
                }
            </DayText>
            <LazyLoadImage
                alt={ `weather-img` }
                width={ 57 }
                height={ 62 }
                className="mx-auto mt-2 mb-8"
                src={ `/static/img/${weather_state_name.replace(' ', "")}.png` }
            />
            <div className="flex items-center justify-between">
                <DayText>{ convertTemperature(max_temp) }{ currentTemperature }</DayText>
                <DayText mintemp="true">{ convertTemperature(min_temp) }{ currentTemperature }</DayText>
            </div>
        </DayContainer>
    )
}

export default DayDetail
