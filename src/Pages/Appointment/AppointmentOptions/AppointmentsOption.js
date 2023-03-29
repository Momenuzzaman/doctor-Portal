import React from 'react'

const AppointmentsOption = ({ option }) => {
    const { name, slots } = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default AppointmentsOption;