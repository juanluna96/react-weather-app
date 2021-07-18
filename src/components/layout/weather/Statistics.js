import React from 'react'
import {
    TodayText,
    StatsContainer,
    ButtonLocation,
    StatsTitle,
    StatsData,
    TinyStatsData
} from '../../styles/weather';
import { TiLocationArrow } from 'react-icons/ti';
import ProgressHumidity from './ProgressHumidity';
import { WeatherAPI } from '../../../content';

const Statistics = () => {
    const { consolidated_weather: [today] } = WeatherAPI;

    const roundNumber = (number) => {
        return Math.round(number);
    }

    return (
        <div className="mt-10">
            <TodayText>Today's Highlights</TodayText>
            <div className="grid mt-5 md:grid-cols-2 gap-x-6 gap-y-7 md:justify-end">
                <StatsContainer>
                    <StatsTitle>Wind status</StatsTitle>
                    <StatsData>
                        { roundNumber(today.wind_speed) } <StatsData mini="true">mph</StatsData>
                    </StatsData>
                    <p className="flex items-center justify-center mt-5 mb-4 text-coolGray-200">
                        <ButtonLocation><TiLocationArrow className="text-white transform rotate-180" size="1.6rem" /></ButtonLocation>
                        { today.wind_direction_compass }
                    </p>
                </StatsContainer>
                <StatsContainer>
                    <StatsTitle>Humidity</StatsTitle>
                    <StatsData>
                        { roundNumber(today.humidity) } <StatsData mini="true">%</StatsData>
                    </StatsData>
                    <ProgressHumidity humidity={ roundNumber(today.humidity) }></ProgressHumidity>
                </StatsContainer>
                <StatsContainer>
                    <StatsTitle>Visibility</StatsTitle>
                    <TinyStatsData>
                        { today.visibility.toFixed(1).replace('.', ",") } { ' ' }<TinyStatsData mini="true">{ ' ' }miles</TinyStatsData>
                    </TinyStatsData>
                </StatsContainer>
                <StatsContainer>
                    <StatsTitle>Air pressure</StatsTitle>
                    <TinyStatsData>
                        { roundNumber(today.air_pressure) } <TinyStatsData mini="true">mb</TinyStatsData>
                    </TinyStatsData>
                </StatsContainer>
            </div>
        </div>
    )
}

export default Statistics
