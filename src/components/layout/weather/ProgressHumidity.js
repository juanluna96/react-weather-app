import React from 'react'
import { ProgressBarFill, PorcentContainer } from '../../styles/weather';

const ProgressHumidity = ({ humidity }) => {
    return (
        <div className="px-6 mt-3 mb-4">
            <PorcentContainer>
                <p>0</p>
                <p>50</p>
                <p>100</p>
            </PorcentContainer>
            <div className="relative pt-0.5">
                <div className="flex h-3 overflow-hidden text-xs bg-purple-200 rounded-lg">
                    <ProgressBarFill style={ { width: `${humidity}%` } }>
                    </ProgressBarFill>
                </div>
            </div>
            <p className="text-sm font-bold text-right text-coolGray-400">%</p>
        </div>
    )
}

export default ProgressHumidity
