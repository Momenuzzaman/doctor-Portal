import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const formSubmitHandler = event => {
        event.preventDefault();
        const form = event.target;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;

        const booking = {
            appointmentData: date,
            treatment: name,
            patientName,
            slot,
            email,
            phone
        };
        console.log(booking);
        setTreatment(null);
    };
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={formSubmitHandler} className="grid gap-3 grid-cols-1 mt-10">
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input type="submit" className='w-full btn btn-accent' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default BookingModal;