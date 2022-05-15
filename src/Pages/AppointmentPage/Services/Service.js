import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div>


            <div className="card lg:max--w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> {name}</h2>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div className="card-actions justify-end">


                        <label htmlFor="my-modal-6"
                            className="btn btn-primary" disabled={slots.length == 0}
                            onClick={() => setTreatment(service)}
                        >open modal</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;