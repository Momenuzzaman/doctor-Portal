import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("")
    return (
        <div className='h-[480px] w-[370px] md:w-[390px]  mx-auto flex justify-center items-center shadow-xl rounded-md'>
            <div>
                <h1 className='text-xl text-center font-bold'>Login</h1>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <div className="form-control w-[330px] mt-[30px]">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" {...register("email")} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control  w-[330px]">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" {...register("password")} className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text-alt font-semibold">Forget Password?</span>
                        </label>
                    </div>
                    <input type="submit" className='w-full btn btn-accent' value="Login" />
                </form>
                <p className='text-center'>New to Doctor Portal? <Link to='/signup' className='text-secondary'> Create new account</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    )
}

export default Login;