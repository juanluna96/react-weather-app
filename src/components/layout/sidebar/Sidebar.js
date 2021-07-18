import React from 'react'
import { SideBarStyle } from '../../styles/main';
import { ButtonGray, TempText, WeatherText, InfoText } from '../../styles/sidebar';
import { BiCurrentLocation } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import WeatherImage from './WeatherImage';

const Sidebar = () => {
    return (
        <SideBarStyle>
            <div className="flex justify-between px-6">
                <ButtonGray>Search for place</ButtonGray>
                <ButtonGray gps="true"><BiCurrentLocation size="2.3rem" /></ButtonGray>
            </div>
            <WeatherImage></WeatherImage>
            <TempText>
                15
                <span className="mt-4 text-gray-400 text-6xl">°C</span>
            </TempText>
            <WeatherText>Shower</WeatherText>
            <InfoText>Today &#183; Fri, 5 Jun</InfoText>
            <InfoText city="true">
                <MdLocationOn size="1.8rem" className="mr-2"></MdLocationOn> Helsinki
            </InfoText>
        </SideBarStyle>
    )
}

export default Sidebar
