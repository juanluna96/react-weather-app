import React from 'react'
import { SideBarStyle } from '../../styles/main';
import { ButtonGray, TempText, WeatherText, InfoText } from '../../styles/sidebar';
import { BiCurrentLocation } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import WeatherImage from './WeatherImage';
import Moment from 'react-moment';
import { useSelector, useDispatch } from 'react-redux';
import { showHideSearchBarAction } from '../../../actions/SearchAction';
import { getWeatherGeoLocationAction } from '../../../actions/WeatherAction';
import AnimatedNumber from "animated-number-react";
import TextTransition from 'react-text-transition';

const Sidebar = () => {
    const today = useSelector(state => state.weather.today);
    const city = useSelector(state => state.weather.city);
    const searchBar = useSelector(state => state.search.searchBar);
    const currentTemperature = useSelector(state => state.weather.currentTemperature);
    const dispatch = useDispatch();

    const showSearchSideBar = () => {
        dispatch(showHideSearchBarAction(searchBar));
    }

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
        return Math.round(newT);
    };

    const getWeatherCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            dispatch(getWeatherGeoLocationAction(latitude, longitude));
        });
    }

    return (
        <SideBarStyle>
            <div className="flex justify-between px-6">
                <ButtonGray onClick={ () => showSearchSideBar() }>Search for place</ButtonGray>
                <ButtonGray rounded="true" onClick={ () => getWeatherCurrentLocation() }><BiCurrentLocation size="2.3rem" /></ButtonGray>
            </div>
            <WeatherImage image={ today.weather_state_name.replace(' ', "") }></WeatherImage>
            <TempText>
                <AnimatedNumber
                    value={ today.the_temp }
                    formatValue={ convertTemperature }
                    duration={ 3500 }
                />
                <span className="mt-4 text-6xl text-gray-400">{ currentTemperature }</span>
            </TempText>
            <WeatherText>
                <TextTransition
                    text={ today.weather_state_name }
                    className="text-center"
                    noWrap={ false }
                />
            </WeatherText>
            <InfoText>Today &#183; <Moment format="ddd, DD MMM" date={ today.applicable_date } /></InfoText>
            <InfoText city="true">
                <MdLocationOn size="1.8rem" className="mr-2"></MdLocationOn>
                <TextTransition
                    text={ city }
                    className="text-center"
                    noWrap={ false }
                />
            </InfoText>
        </SideBarStyle>
    )
}

export default Sidebar
