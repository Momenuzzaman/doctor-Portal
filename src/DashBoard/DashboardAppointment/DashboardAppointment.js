import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { useQuery } from 'react-query';

const DashboardAppointment = () => {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    console.log(url);

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` }
            });
            const data = await res.json();
            return data
        }
    });
    return (
        <div>
            <h3 className="text-3xl m-6">My Appointment</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => {
                                const { patientName, treatment, appointmentData, slot } = booking;
                                return <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{patientName}</td>
                                    <td>{treatment}</td>
                                    <td>{appointmentData}</td>
                                    <td>{slot}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashboardAppointment;