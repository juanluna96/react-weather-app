import React from 'react';
import '../../styles/spinner.css';

function Spinner() {
    return (
        <div className="flex h-screen justify-center items-center w-full">
            <div className="text-center">
                <h1 className="text-3xl text-white">
                    Please accept location request and refresh the page to get started...
                </h1>
                <div className="loader">
                    <span className="loader__sun"></span>
                </div>
            </div>
        </div>
    );
}

export default Spinner;
