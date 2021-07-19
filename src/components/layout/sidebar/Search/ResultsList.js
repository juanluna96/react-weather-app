import React from 'react'
import { SearchResults } from '../../../../content';
import Result from './Result';

const ResultsList = () => {
    return (
        <ul className="px-5 mt-10">
            {
                SearchResults.length === 0
                    ? 'Result not found please try again.'
                    : SearchResults.map((city) => (
                        <Result key={ city.woeid } city={ city }></Result>
                    ))
            }
        </ul>
    )
}

export default ResultsList
