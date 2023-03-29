import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className="grid gap-3 grid-cols-1 mt-10">
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select className="select select-bordered w-full">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <br />
                        <input type="submit" className='w-full btn btn-accent' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default BookingModal;