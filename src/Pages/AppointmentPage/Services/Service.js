import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div>


            <div class="card lg:max--w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title"> {name}</h2>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div class="card-actions justify-end">


                        <label for="my-modal-6"
                            class="btn btn-primary" disabled={slots.length == 0}
                            onClick={() => setTreatment(service)}
                        >open modal</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;