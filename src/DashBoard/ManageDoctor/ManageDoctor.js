import React, { useState } from 'react'
import { useQuery } from 'react-query';
import Loading from '../../Pages/Shared/Loading/Loading';
import ConfirmationModal from '../../Pages/Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const { data: doctors, isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data
            }
            catch (err) { }
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    };
    const closeModal = () => {
        setDeletingDoctor(null);
    };
    const deleteModal = (doctor) => {
        console.log(doctor);
    }
    return (
        <div>ManageDoctor {doctors?.length}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors && doctors?.map((doctor, i) => {
                                const { name, image, email, specialty } = doctor
                                return <tr key={doctor._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={image} alt='doctor' />
                                        </div>
                                    </div></td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{specialty}</td>
                                    <td>
                                        <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn  btn-sm  btn-error">Delete</label>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    closeModal={closeModal}
                    modalData={deletingDoctor}
                    successAction={deleteModal}
                    message={`If you delete ${deletingDoctor.name}. It can't be undone`}
                ></ConfirmationModal>
            }
        </div>
    )
}

export default ManageDoctor;