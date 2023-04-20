import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_strip_PK);
console.log(stripePromise)
const Payment = () => {
    const booking = useLoaderData();
    const { appointmentDate, slot, treatment, price } = booking;
    console.log('Payment', booking)
    return (
        <div>
            <p className="text-3xl">Payment for {treatment}</p>
            <p className="text-xl">Please pay<strong> ${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    )
}

export default Payment;