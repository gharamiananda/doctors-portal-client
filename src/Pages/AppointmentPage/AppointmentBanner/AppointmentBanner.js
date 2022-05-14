import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div>
            <DayPicker

                mode="single"
                selected={date}
                onSelect={setDate}
            ></DayPicker>
            <p>You picked {format(date, 'PP')}.</p>
        </div>
    );
};

export default AppointmentBanner;