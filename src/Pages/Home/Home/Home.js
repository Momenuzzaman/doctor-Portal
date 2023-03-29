import React from 'react'
import Banner from '../Banner/Banner';
import CareSection from '../CareSection/CareSection';
import ContactUS from '../ContactUs/ContactUS';
import InfoCards from '../doctorInfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className=" mx-5">
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <CareSection></CareSection>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUS></ContactUS>
        </div>
    )
}

export default Home;