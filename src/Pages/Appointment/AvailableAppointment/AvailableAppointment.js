import React, { useState } from 'react'
import { format } from 'date-fns';
import AppointmentsOption from '../AppointmentOptions/AppointmentsOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
const AvailableAppointment = ({ selectedDate }) => {

    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const { data: appointmentOptions = [], refetch } = useQuery({
        queryKeys: ['appointmentCollections', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentCollections?date=${date}`)
            const data = await res.json();
            return data;
        }
    });

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
            {treatment && <BookingModal
                treatment={treatment}
                selectedDate={selectedDate}
                setTreatment={setTreatment}
                refetch={refetch}
            >
            </BookingModal>}
        </div>
    )
}

export default AvailableAppointment;