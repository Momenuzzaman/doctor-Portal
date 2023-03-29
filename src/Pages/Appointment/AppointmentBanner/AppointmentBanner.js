import React, { useState } from 'react'
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <header className="my-6">
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="" className="md:w-1/3 rounded-lg shadow-2xl" />
                    <div className="pr-6">
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p className="text-center text-primary">You picked {format(selectedDate, 'PP')}.</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppointmentBanner;