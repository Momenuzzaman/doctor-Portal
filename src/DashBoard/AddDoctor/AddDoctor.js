import React from 'react'
import { useForm } from "react-hook-form";

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const handleAddDoctor = (data) => {
        console.log(data);
    }
    return (
        <div className="mt-10 h-[550px] w-[370px] md:w-[390px]  mx-auto flex justify-center items-center shadow-xl rounded-md">
            <div>
                <h1 className='text-xl text-center font-bold'>Add Doctor</h1>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                    </div>
                    <input type="submit" className='w-full btn btn-accent' value="Add Doctor" />
                </form>
            </div>

        </div>
    )
}

export default AddDoctor;