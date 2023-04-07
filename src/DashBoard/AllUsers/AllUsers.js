import React from 'react'
import { useQuery } from 'react-query';

const AllUsers = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = res.json()
            return data;
        }
    });
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
                            const { name, email } = user
                            return <tr>
                                <th>{i + 1}</th>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td><button class="btn btn-xs btn-primary">Make Admin</button></td>
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