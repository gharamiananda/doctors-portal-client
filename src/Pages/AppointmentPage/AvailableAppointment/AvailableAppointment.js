import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Service from '../Services/Service';

const AvailableAppointment = ({ date }) => {
    const [services, setservices] = useState([]);
    const [treatment, setTreatment] = useState(null);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setservices(data);
            })
    }, [])


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        >

                        </Service>
                    )
                }
            </div>
            {
                treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;