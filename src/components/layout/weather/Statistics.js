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
import { useSelector } from 'react-redux';
import AnimatedNumber from "animated-number-react";

const Statistics = () => {
    const today = useSelector(state => state.weather.today);

    const roundNumber = (number) => {
        return Math.round(number);
    }

    const formatVisibility = (number) => {
        return number.toFixed(1).replace('.', ",")
    }

    return (
        <div className="mt-10">
            <TodayText>Today's Highlights</TodayText>
            <div className="grid mt-5 md:grid-cols-2 gap-x-6 gap-y-7 md:justify-end">
                <StatsContainer>
                    <StatsTitle>Wind status</StatsTitle>
                    <StatsData>
                        <AnimatedNumber
                            value={ today.wind_speed }
                            formatValue={ roundNumber }
                            duration={ 3500 }
                        />
                        <StatsData mini="true">mph</StatsData>
                    </StatsData>
                    <p className="flex items-center justify-center mt-5 mb-4 text-coolGray-200">
                        <ButtonLocation><TiLocationArrow className="text-white transform rotate-180" size="1.6rem" /></ButtonLocation>
                        { today.wind_direction_compass }
                    </p>
                </StatsContainer>
                <StatsContainer>
                    <StatsTitle>Humidity</StatsTitle>
                    <StatsData>
                        <AnimatedNumber
                            value={ today.humidity }
                            formatValue={ roundNumber }
                            duration={ 3500 }
                        />
                        <StatsData mini="true">%</StatsData>
                    </StatsData>
                    <ProgressHumidity></ProgressHumidity>
                </StatsContainer>
                <StatsContainer>
                    <StatsTitle>Visibility</StatsTitle>
                    <TinyStatsData>
                        <AnimatedNumber
                            value={ today.visibility }
                            formatValue={ formatVisibility }
                            duration={ 3500 }
                        />
                        { ' ' }
                        <TinyStatsData mini="true">{ ' ' }miles</TinyStatsData>
                    </TinyStatsData>
                </StatsContainer>
                <StatsContainer>
                    <StatsTitle>Air pressure</StatsTitle>
                    <TinyStatsData>
                        <AnimatedNumber
                            value={ today.air_pressure }
                            formatValue={ roundNumber }
                            duration={ 3500 }
                        />
                        <TinyStatsData mini="true">mb</TinyStatsData>
                    </TinyStatsData>
                </StatsContainer>
            </div>
        </div>
    )
}

export default Statistics
