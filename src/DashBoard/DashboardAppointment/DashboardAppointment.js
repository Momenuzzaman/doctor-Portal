import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const DashboardAppointment = () => {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url,
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                }
            );
            const data = await res.json();
            return data
        }
    });
    console.log(bookings)
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
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings && bookings.map((booking, i) => {
                                const { patientName, treatment, appointmentData, slot, price, paid } = booking;
                                return <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{patientName}</td>
                                    <td>{treatment}</td>
                                    <td>{appointmentData}</td>
                                    <td>{slot}</td>
                                    <td>
                                        {
                                            price &&
                                            !paid &&
                                            <Link to={`/dashboard/payment/${booking._id}`}>
                                                <button className="btn btn-sm btn-primary">Pay</button>
                                            </Link>
                                        }
                                        {
                                            price && paid && <spam className="text-primary">Paid</spam>
                                        }
                                    </td>
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