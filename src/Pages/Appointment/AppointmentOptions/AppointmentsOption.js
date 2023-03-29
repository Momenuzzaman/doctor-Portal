import React from 'react'

const AppointmentsOption = ({ option }) => {
    const { name, slots } = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-secondary text-2xl font-semibold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 0 ? 'Spaces' : 'Space'} Available</p>
                <div className="card-actions justify-center ">
                    <button className="btn btn-secondary text-white">BOOK APPOINTMENT</button>
                </div>
            </div>
        </div>
    )
}

export default AppointmentsOption;