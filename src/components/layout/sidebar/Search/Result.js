import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { ButtonResult } from '../../../styles/search';
import { getWeatherAction } from '../../../../actions/WeatherAction';
import { useDispatch } from 'react-redux';
import { showHideSearchBarAction } from '../../../../actions/SearchAction';

const Result = ({ city }) => {
    const dispatch = useDispatch();

    const getWeatherByCity = (cityId) => {
        dispatch(showHideSearchBarAction(true));
        dispatch(getWeatherAction(cityId));
    }

    return (
        <li className="my-3">
            <ButtonResult onClick={ () => getWeatherByCity(city.woeid) }>
                { city.title }
                <IoIosArrowForward className="transition duration-200 ease-in-out opacity-0 group-hover:opacity-100 text-coolGray-400" size="1.6rem" />
            </ButtonResult>
        </li>
    )
}

export default Result
