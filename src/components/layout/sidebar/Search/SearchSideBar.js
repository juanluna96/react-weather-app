import React from 'react'
import { SideBarStyle } from '../../../styles/main';
import { IoMdClose } from 'react-icons/io';
import { CloseButton } from '../../../styles/search';
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';
import { useDispatch, useSelector } from 'react-redux';
import { showHideSearchBarAction } from '../../../../actions/SearchAction';

const SearchSideBar = () => {
    const searchBar = useSelector(state => state.search.searchBar);
    const dispatch = useDispatch();

    const hideSearchSideBar = () => {
        dispatch(showHideSearchBarAction(searchBar));
    }

    return (
        <SideBarStyle>
            <div className="flex justify-end px-6">
                <CloseButton onClick={ () => hideSearchSideBar() }><IoMdClose size="2.3rem" /></CloseButton>
            </div>
            <SearchForm></SearchForm>
            <ResultsList></ResultsList>
        </SideBarStyle>
    )
}

export default SearchSideBar
