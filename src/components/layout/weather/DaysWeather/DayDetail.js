import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { DayContainer, DayText } from '../../../styles/weather';
import Moment from 'react-moment';

const DayDetail = ({ day, index }) => {
    const { applicable_date, weather_state_name, max_temp, min_temp } = day;

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
                <DayText>{ Math.round(max_temp) }°C</DayText>
                <DayText mintemp="true">{ Math.round(min_temp) }°C</DayText>
            </div>
        </DayContainer>
    )
}

export default DayDetail
