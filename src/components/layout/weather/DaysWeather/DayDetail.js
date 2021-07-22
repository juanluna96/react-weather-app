import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { DayContainer, DayText } from '../../../styles/weather';
import Moment from 'react-moment';
import { useSelector } from 'react-redux';
import AnimatedNumber from "animated-number-react";
import moment from 'moment';
import TextTransition from 'react-text-transition';

const DayDetail = ({ day, index }) => {
    const currentTemperature = useSelector(state => state.weather.currentTemperature);
    const { applicable_date, weather_state_name, max_temp, min_temp } = day;

    const convertTemperature = (temp) => {
        var newT = 0;
        switch (currentTemperature) {
            case "°C":
                newT = temp;
                break;
            case "°F":
                newT = temp * 1.8 + 32;
                break;
            default:
                break;
        }
        return newT.toFixed(1);
    };

    return (
        <DayContainer>
            <DayText title="true">
                {
                    index === 0
                        ? 'Tomorrow'
                        :
                        <TextTransition
                            text={ moment(applicable_date).format("ddd, DD MMM") }
                            className="text-center"
                            noWrap={ false }
                        />
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
                <DayText>
                    <AnimatedNumber
                        value={ max_temp }
                        formatValue={ convertTemperature }
                        duration={ 3000 }
                    />
                    { currentTemperature }
                </DayText>
                <DayText mintemp="true">
                    <AnimatedNumber
                        value={ min_temp }
                        formatValue={ convertTemperature }
                        duration={ 3000 }
                    />
                    { currentTemperature }
                </DayText>
            </div>
        </DayContainer>
    )
}

export default DayDetail
