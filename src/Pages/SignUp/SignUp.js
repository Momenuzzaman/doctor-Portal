import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';




const SignUp = () => {
    const [signUpError, setSignUPError] = useState('')
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signUp, updateUser, singUpWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignUp = () => {
        setSignUPError('');
        singUpWithGoogle()
            .then(result => {
                const user = result.user;
                navigate('/');
                toast.success('Successfully created account.');
                console.log(user);
            })
            .catch(error => {
                setSignUPError(error.message);
            })
    };

    const handleSignUp = data => {
        setSignUPError('');
        signUp(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully created account.');
                const userInfo = { displayName: data.name };
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error);
                setSignUPError(error.message)
            });
    };
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                getUserToken(email);
            })
    };

    const getUserToken = (email) => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(response => response.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('access_token', data.accessToken);
                    navigate('/')
                }
            })
    };
    return (
        <div className='mt-32 h-[550px] w-[370px] md:w-[390px]  mx-auto flex justify-center items-center shadow-xl rounded-md'>
            <div>
                <h1 className='text-xl text-center font-bold'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-[330px] mt-[20px]">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" {
                            ...register("name",
                                {
                                    required: "Name is required"
                                })}
                            className="input input-bordered w-full " />
                        {errors.text && <p className='text-red-500'>{errors.text?.message}</p>}
                    </div>
                    <div className="form-control w-[330px] mt-[5px]">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" {
                            ...register("email",
                                {
                                    required: "Email Address is required"
                                })}
                            className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control  w-[330px]">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" {
                            ...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be at least 6 characters long' },
                                pattern: { value: /^(?=.*[a-z])(?=.*\d)(?=.*[#$@!%&*?])[a-z\d#$@!%&*?]{6,30}$/, message: 'Password must have uppercase, number and special characters' }
                            })}
                            className="input input-bordered w-full mb-5" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <input type="submit" className='w-full btn btn-accent' value="Sign Up" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='text-center'>Already Have an Account? <Link to='/login' className='text-secondary'> Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignUp} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    )
}

export default SignUp;