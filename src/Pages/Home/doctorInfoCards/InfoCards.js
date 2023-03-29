import React from 'react'
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCardDetail from './InfoCardDetail';
const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00 pm Everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgClass: 'bg-accent',
        },
        {
            id: 2,
            name: 'Contact Us',
            description: '+000 123 456789',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
        }
    ];
    return (
        <div className=' grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <InfoCardDetail key={card._id} card={card}>

                </InfoCardDetail>)
            }
        </div>
    )
}

export default InfoCards;