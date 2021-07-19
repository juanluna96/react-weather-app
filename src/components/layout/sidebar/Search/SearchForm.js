import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { searchCitiesWeatherAction, saveSearchValueAction } from '../../../../actions/SearchAction';

const SearchForm = () => {
    const search = useSelector(state => state.search.value);
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        dispatch(saveSearchValueAction(e.target.value));
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (search.trim() === '') return;

        dispatch(searchCitiesWeatherAction(search));
    }

    return (
        <form className="px-5 mt-10 md:flex-wrap md:justify-between md:flex" onSubmit={ e => handleOnSubmit(e) }>
            <div className="flex items-center w-full my-2 md:justify-center text-coolGray-400 md:w-8/12">
                <div className="flex w-full overflow-hidden border border-coolGray-400 ">
                    <button className="flex items-center justify-center px-2 cursor-default" onClick={ e => e.preventDefault() }>
                        <HiOutlineSearch size='1.7rem' />
                    </button>
                    <input type="text" value={ search } className="px-4 py-4 text-2xl font-bold bg-transparent focus:outline-none text-coolGray-400" onChange={ e => handleOnChange(e) } placeholder="search location" />
                </div>
            </div>
            <button type="submit" className="w-full p-4 my-2 text-2xl font-semibold bg-indigo-600 md:w-3/12 text-coolGray-200">Search</button>
        </form>
    )
}

export default SearchForm
