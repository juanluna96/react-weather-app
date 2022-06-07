import React from 'react'
import { useSelector } from 'react-redux';
import Result from './Result';

const ResultsList = () => {
    const cities = useSelector(state => state.search.cities);
    const searched = useSelector(state => state.search.searched);

    return (
        <ul className="max-h-screen px-5 mt-10 overflow-y-scroll">
            {
                cities.length === 0 && searched === true
                    ? <p className="my-20 text-center">Results not found please try again.</p>
                    : cities.map((city) => (
                        <Result key={ city.id } city={ city }></Result>
                    ))
            }
        </ul>
    )
}

export default ResultsList
