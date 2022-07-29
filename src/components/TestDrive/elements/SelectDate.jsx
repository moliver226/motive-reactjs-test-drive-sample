import React from 'react';

import {monthNames, dayNames} from "../../../helpers/utilities";

export const SelectDate = ({handleSelectDate}) => {
    var startDate = new Date();
    startDate.setHours(0, 0, 0, 0);
    
    var endDate = new Date();
    endDate.setHours(0, 0, 0, 0);
    endDate.setDate(endDate.getDate() + 14)

    const dates = [];

    let loop = new Date(startDate);
    while (loop <= endDate) {
        let newDate = loop.setDate(loop.getDate() + 1);
        loop = new Date(newDate);
        dates.push(loop)
    }

    return(
        <div className='test-drive-body-select-date'>
            {dates.map((item, index)=>(
                <div onClick={() => handleSelectDate(item)} className='test-drive-body-dates'>
                    <p key={index}>{dayNames[item.getDay()]}</p>
                    <p key={index}>{item.getDate()}</p>
                    <p key={index}>{monthNames[item.getMonth()]}</p>
                </div>
            ))}
        </div>
    );
};