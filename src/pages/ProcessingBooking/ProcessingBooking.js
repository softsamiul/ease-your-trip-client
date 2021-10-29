import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth/useAuth';

const ProcessingBooking = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const [service, setService] = useState([])
    const url = `http://localhost:7000/trips/${id}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl font-medium my-8">Process booking</h2>
            <div>
                <p>Welcome {user.displayName}</p>
                <p>You are applying for {service.name}</p>
            </div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center w-2/5 mx-auto mb-8">
                {/* Fuull name */}
                <input className="border-2 border-gray d-block py-1 px-2 w-full" defaultValue={user.displayName} {...register("fullName", { required: true, maxLength: 20 })} />
                {/* Email */}
                <input className="border-2 border-gray d-block py-1 px-2 w-full my-2" defaultValue={user.email} {...register("email", { required: true, maxLength: 20 })} required/>
                {/* City */}
                <input className="border-2 border-gray d-block py-1 px-2 w-full" placeholder="City" {...register("city", { required: true, maxLength: 20 })} required/>
                {/* Area pincode */}
                <input className="border-2 border-gray d-block py-1 px-2 w-full mt-2" placeholder="Area pin code" type="number" {...register("phone")} required/>
                {/* Address */}
                <textarea className="border-2 border-gray d-block py-1 px-2 w-full my-2" placeholder="Address" {...register("address")} required/>
                {/* Phone num */}
                <input className="border-2 border-gray d-block py-1 px-2 w-full" placeholder="Phone" type="number" {...register("phone")} required/>
                <input className="mt-2" type="submit" value="Confirm Booking" />
            </form>
            </div>
        </div>
    );
};

export default ProcessingBooking;