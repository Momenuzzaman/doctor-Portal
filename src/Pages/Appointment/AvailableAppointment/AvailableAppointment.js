import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import AppointmentsOption from '../AppointmentOptions/AppointmentsOption';
const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);

    useEffect(() => {
        fetch('appointmentOptions.json',)
            .then(response => response.json())
            .then(data => setAppointmentOptions(data));
    }, []);
    return (
        <div>
            <p className="text-center text-2xl  text-secondary">Available Services on  {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentsOption
                        key={option._id}
                        option={option}
                    >

                    </AppointmentsOption>)
                }
            </div>
        </div>
    )
}

export default AvailableAppointment;