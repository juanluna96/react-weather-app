import React from 'react'
import { SideBarStyle } from '../../styles/main';
import { ButtonGray, TempText, WeatherText, InfoText } from '../../styles/sidebar';
import { BiCurrentLocation } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import WeatherImage from './WeatherImage';
import Moment from 'react-moment';
import { useSelector, useDispatch } from 'react-redux';
import { showHideSearchBarAction } from '../../../actions/SearchAction';

const Sidebar = () => {
    const today = useSelector(state => state.weather.today);
    const city = useSelector(state => state.weather.city);
    const searchBar = useSelector(state => state.search.searchBar);
    const dispatch = useDispatch();

    const showSearchSideBar = () => {
        dispatch(showHideSearchBarAction(searchBar));
    }

    return (
        <SideBarStyle>
            <div className="flex justify-between px-6">
                <ButtonGray onClick={ () => showSearchSideBar() }>Search for place</ButtonGray>
                <ButtonGray rounded="true"><BiCurrentLocation size="2.3rem" /></ButtonGray>
            </div>
            <WeatherImage image={ today.weather_state_name.replace(' ', "") }></WeatherImage>
            <TempText>
                { Math.round(today.the_temp) }
                <span className="mt-4 text-6xl text-gray-400">°C</span>
            </TempText>
            <WeatherText>{ today.weather_state_name }</WeatherText>
            <InfoText>Today &#183; <Moment format="ddd, DD MMM" date={ today.applicable_date } /></InfoText>
            <InfoText city="true">
                <MdLocationOn size="1.8rem" className="mr-2"></MdLocationOn> { city }
            </InfoText>
        </SideBarStyle>
    )
}

export default Sidebar
