import React from 'react'
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import Loading from '../../Pages/Shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imhbb_key;
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['Specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = res.json();
            return data;
        }
    });
    // console.log(specialties)
    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/doctors')
                        })
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Specialty</span>
                        </label>
                        <select
                            {...register("specialty")}
                            className="select input-bordered w-full mb-5">
                            {
                                specialties.map((specialty) => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="flex w-full  items-center justify-center bg-grey-lighter mb-4">
                        <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-300 hover:text-white ">
                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>
                            <span className="mt-2 text-base leading-normal">Select a Image</span>
                            <input type='file'
                                {...register('image', {
                                    required: "Photo is required",
                                })}
                                className="hidden" />
                            {errors.img && <p className="text-red-500">{errors.img.message}</p>}
                        </label>
                    </div>
                    <input type="submit" className='w-full btn btn-accent' value="Add Doctor" />
                </form>
            </div>
        </div>
    )
}

export default AddDoctor;