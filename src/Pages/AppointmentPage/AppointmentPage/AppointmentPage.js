import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const AppointmentPage = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate} />
            <AvailableAppointment date={date}></AvailableAppointment>

        </div>
    );
};

export default AppointmentPage;