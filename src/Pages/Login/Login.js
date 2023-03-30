import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const [error, setError] = useState('');
    const { logIn } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = data => {
        setError('');
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(err => setError(err.message));
    }
    return (
        <div className='mt-32 h-[480px] w-[370px] md:w-[390px]  mx-auto flex justify-center items-center shadow-xl rounded-md'>
            <div>
                <h1 className='text-xl text-center font-bold'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-[330px] mt-[30px]">
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
                                minLength: { value: 6, message: 'Password must be at least 6 characters long' }
                            })}
                            className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text-alt font-semibold">Forget Password?</span>
                        </label>
                    </div>
                    <input type="submit" className='w-full btn btn-accent' value="Login" />
                    {error && <p className='text-red-500'>{error}</p>}
                </form>
                <p className='text-center'>New to Doctor Portal? <Link to='/signup' className='text-secondary'> Create new account</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    )
}

export default Login;