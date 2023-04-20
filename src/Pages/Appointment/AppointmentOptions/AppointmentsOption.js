import React from 'react'

const AppointmentsOption = ({ option, setTreatment }) => {
    const { name, slots, price } = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-secondary text-2xl font-semibold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 0 ? 'Spaces' : 'Space'} Available</p>
                <p>price : ${price}</p>
                <div className="card-actions justify-center ">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(option)}
                        htmlFor="booking-modal"
                        className="btn btn-secondary text-white"
                    >BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    )
}

export default AppointmentsOption;