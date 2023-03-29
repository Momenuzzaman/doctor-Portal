import React from 'react'
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import bg from '../../../assets/images/bg.png';
const Banner = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${bg})`
            }}>
            <div className="hero lg:pb-56">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <PrimaryButton>Get started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;