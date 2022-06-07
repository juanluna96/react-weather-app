import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { ButtonResult } from '../../../styles/search';
import { useDispatch } from 'react-redux';
import { showHideSearchBarAction } from '../../../../actions/SearchAction';
import {getWeatherGeoLocationAction} from "../../../../actions/WeatherAction";

const Result = ({ city }) => {
    const dispatch = useDispatch();

    const getWeatherByCity = (city) => {
        dispatch(showHideSearchBarAction(true));
        dispatch(getWeatherGeoLocationAction(city.latitude, city.longitude));
    }

    return (
        <li className="my-3 animate-fadeIn">
            <ButtonResult onClick={ () => getWeatherByCity(city) }>
                { city.city }, {city.region}, {city.countryCode}
                <IoIosArrowForward className="transition duration-200 ease-in-out opacity-0 group-hover:opacity-100 text-coolGray-400" size="1.6rem" />
            </ButtonResult>
        </li>
    )
}

export default Result
