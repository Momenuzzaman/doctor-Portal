import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("")
    return (
        <div className='h-[480px] w-[390px] mx-auto flex justify-center items-center shadow-xl rounded-md'>
            <div>
                <h1 className='text-4xl text-center'>Login</h1>
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
                        <input type="email" {...register("password")} className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text-alt font-semibold">Forget Password?</span>
                        </label>
                    </div>
                    <input type="submit" className='w-full btn btn-accent' />
                </form>
            </div>
        </div>
    )
}

export default Login;