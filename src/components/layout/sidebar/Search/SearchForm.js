import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

const SearchForm = () => {
    return (
        <form className="px-5 mt-10 md:flex-wrap md:justify-between md:flex">
            <div class="flex items-center md:justify-center text-coolGray-400 w-full my-2 md:w-8/12">
                <div class="border overflow-hidden flex border-coolGray-400 w-full ">
                    <button class="flex items-center justify-center px-2 cursor-default" onClick={ e => e.preventDefault() }>
                        <HiOutlineSearch size='1.7rem' />
                    </button>
                    <input type="text" class="px-4 py-4 text-2xl font-bold bg-transparent focus:outline-none  text-coolGray-400" placeholder="search location" />
                </div>
            </div>
            <button type="submit" className="w-full p-4 my-2 text-2xl font-semibold bg-indigo-600 md:w-3/12 text-coolGray-200">Search</button>
        </form>
    )
}

export default SearchForm