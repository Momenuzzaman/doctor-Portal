import React from 'react'
import { format } from 'date-fns';
const AvailableAppointment = ({ selectedDate }) => {
    return (
        <div>
            <p className="text-center text-2xl  text-secondary">Available Services on  {format(selectedDate, 'PP')}</p>
        </div>
    )
}

export default AvailableAppointment;