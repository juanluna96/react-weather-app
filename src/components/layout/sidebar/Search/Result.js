import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { ButtonResult } from '../../../styles/search';

const Result = ({ city }) => {
    return (
        <li className="my-3">
            <ButtonResult>
                { city.title }
                <IoIosArrowForward className="transition duration-200 ease-in-out opacity-0 group-hover:opacity-100 text-coolGray-400" size="1.6rem" />
            </ButtonResult>
        </li>
    )
}

export default Result
