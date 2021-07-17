import React from 'react'
import { SideBarStyle } from '../../styles/main';
import { ButtonGray, TempText } from '../../styles/sidebar';
import { BiCurrentLocation } from 'react-icons/bi';
import WeatherImage from './WeatherImage';

const Sidebar = () => {
    return (
        <SideBarStyle>
            <div className="flex justify-between px-6">
                <ButtonGray>Search for place</ButtonGray>
                <ButtonGray GPS><BiCurrentLocation size="2.3rem" /></ButtonGray>
            </div>
            <WeatherImage></WeatherImage>
            <TempText>
                15
                <span className="mt-4 text-gray-400 text-6xl">°C</span>
            </TempText>
        </SideBarStyle>
    )
}

export default Sidebar
