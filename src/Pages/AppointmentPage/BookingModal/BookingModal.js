import React from 'react';
import { format } from 'date-fns';


const BookingModal = ({ treatment, date, setTreatment }) => {

    const { name, slots } = treatment;

    const handleBooking = (event) => {
        event.preventDefault();


        const slot = event.target.slot.value;
        console.log(slot, name);
        setTreatment(null)
    }

    return (

        <div className="">



            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 class="font-bold text-lg">{name}</h3>

                    <form onSubmit={handleBooking}>


                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" placeholder="Your Name" name='name' class="input input-bordered w-full max-w-xs" />
                        <input type="email" placeholder="Your Email" name='email' class="input input-bordered w-full max-w-xs" />
                        <input type="phone" placeholder="Phone Number" name='phone' class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' placeholder="Type here" class="btn btn-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;