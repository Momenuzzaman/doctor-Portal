import React, { useContext } from 'react'
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    return (
        <div>
            <p className='text-red-500'>Something went wrong!!!</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <h3 className='text-3xl'>Please <button onClick={() => logOut()}>Log out</button> and log back in</h3>
        </div>
    )
}

export default DisplayError