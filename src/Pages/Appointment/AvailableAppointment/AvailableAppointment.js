import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import AppointmentsOption from '../AppointmentOptions/AppointmentsOption';
import BookingModal from '../BookingModal/BookingModal';
const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json',)
            .then(response => response.json())
            .then(data => setAppointmentOptions(data));
    }, []);
    return (
        <div className="my-16">
            <p className="text-center text-2xl  text-secondary">Available Services on  {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentsOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    >
                    </AppointmentsOption>)
                }
            </div>
            <BookingModal treatment={treatment}></BookingModal>
        </div>
    )
}

export default AvailableAppointment;