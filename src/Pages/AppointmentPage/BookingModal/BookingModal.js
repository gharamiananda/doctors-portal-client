import React from 'react';
import { format } from 'date-fns';
import auth from '../../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const BookingModal = ({ treatment, date, setTreatment }) => {

    const [user, loading] = useAuthState(auth);

    const { name, slots } = treatment;

    const handleBooking = (event) => {
        event.preventDefault();


        const slot = event.target.slot.value;
        console.log(slot, name);
        setTreatment(null)
    }

    return (

        <div className="">



            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg">{name}</h3>

                    <form onSubmit={handleBooking}>


                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs mb-2" />
                        <select name='slot' className="select select-bordered w-full max-w-xs  mb-2">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" disabled value={user?.displayName || ''} name='name' className="input input-bordered w-full max-w-xs mb-2" />
                        <input type="email" name='email'
                            disabled value={user?.email || ''}
                            className="input input-bordered w-full max-w-xs  mb-2" />
                        <input type="phone" placeholder="Phone Number" name='phone' className="input input-bordered w-full max-w-xs mb-2" />
                        <input type="submit" value='Submit' placeholder="Type here" className="btn btn-primary w-full max-w-xs mb-2" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;