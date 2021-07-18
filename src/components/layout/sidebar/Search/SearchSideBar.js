import React from 'react'
import { SideBarStyle } from '../../../styles/main';
import { IoMdClose } from 'react-icons/io';
import { WeatherAPI } from '../../../../content';
import { CloseButton } from '../../../styles/search';
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';

const SearchSideBar = () => {
    const { title, consolidated_weather } = WeatherAPI;
    const [today] = consolidated_weather;

    return (
        <SideBarStyle>
            <div className="flex justify-end px-6">
                <CloseButton><IoMdClose size="2.3rem" /></CloseButton>
            </div>
            <SearchForm></SearchForm>
            <ResultsList></ResultsList>
        </SideBarStyle>
    )
}

export default SearchSideBar
