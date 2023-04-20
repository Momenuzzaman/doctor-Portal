import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const { appointmentDate, slot, treatment, price } = booking;
    console.log('Payment', booking)
    return (
        <div>
            <p className="text-3xl">Payment for {treatment}</p>
            <p className="text-xl">Please pay<strong> ${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
        </div>
    )
}

export default Payment;