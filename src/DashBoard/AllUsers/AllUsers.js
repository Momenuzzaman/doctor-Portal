import React from 'react'
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = res.json()
            return data;
        }
    });

    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(response => response.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful.');
                    refetch()
                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => {
                            const { name, email, _id } = user
                            return <tr key={_id}>
                                <th>{i + 1}</th>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(_id)} class="btn btn-xs btn-primary">Make Admin</button>}</td>
                                <td><button class="btn btn-xs btn-danger">Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllUsers;