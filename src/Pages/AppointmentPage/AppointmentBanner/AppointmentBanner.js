import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date())
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