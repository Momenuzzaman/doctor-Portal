import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleSignUp = data => {
        console.log(data);
        console.log(errors)
    }
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
                            ...register("text",
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
                                pattern: { value: /^(?=.*[a-z])(?=.*\d)(?=.*[#$@!%&*?])[a-z\d#$@!%&*?]{6,30}$/, message: 'Password must be strong' }
                            })}
                            className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text-alt font-semibold">Forget Password?</span>
                        </label>
                    </div>
                    <input type="submit" className='w-full btn btn-accent' value="Sign Up" />
                </form>
                <p className='text-center'>Already Have an Account? <Link to='/login' className='text-secondary'> Please Login</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    )
}

export default SignUp;