import React from 'react'
import contactBg from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const ContactUS = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${contactBg})`
            }}
        >
            <div className="text-center w-72 md:w-1/2 mx-auto">
                <h4 className="text-primary font-semibold text-xl pt-16">Contact Us</h4>
                <h2 className='text-white text-3xl pt-2'>Stay connected with us</h2>
            </div>
            <div className="w-72 md:w-1/2 mx-auto pt-10">
                <form>
                    <div className="mb-4">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="subject"
                            type="text"
                            placeholder="Subject"
                        />
                    </div>
                    <div className="mb-12">
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            rows="7"
                            placeholder="Your message"
                        ></textarea>
                    </div>
                    <div className="flex justify-center pb-20">
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactUS;