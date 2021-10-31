import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth/useAuth';

const ProcessingBooking = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://wicked-cemetery-44199.herokuapp.com/orders',data)
        .then(response => {
            console.log(response);
            if(response.data.insertedId){
                const url = '/myTrips';
                history.push(url);
            }
            
        })
    };

    const [service, setService] = useState([])
    const url = `https://wicked-cemetery-44199.herokuapp.com/trips/${id}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    const {name, desc, _id, thumbnail, price, rating, days, persons} = service;

    return (
        <div>
            <h2 className="text-3xl font-medium my-8">Process booking</h2>
            <div>
                <h2 className="text-xl font-medium">Welcome {user.displayName}</h2>
                <p className="text-base font-medium">You are Booking for {service.name}</p>
            </div>
            <div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-10/12 mx-auto my-12 gap-4 ">
                <div>
                    <div className="p-4 single-service">
                        <div>
                            <img src={thumbnail} className="img-fluid rounded-lg" style={{height:"272px"}} alt="" />
                        </div>
                        <div class="pacakge-fix">
                            <h2 className="text-2xl mt-2 font-base">{name}</h2>
                            <div className="grid grid-cols-3 gap-3 py-1 my-1">
                                <p><i className="fas fa-user-friends"></i> {persons} Persons</p>
                                <p className="border-r border-l border-gray"><i className="fas fa-clock text-blue-900"></i> {days} Days</p>
                                <p><i className="fas fa-star text-yellow-500"></i> {rating} Rating</p>
                            </div>
                            <div>
                                <p className="text-justify">{desc}</p>
                            </div>
                            <p className="text-2xl font-bold py-2"><i className="fas fa-rupee-sign"></i> {price}</p>
                        </div>
                    </div>
                </div>
                <div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center  mx-auto mb-8">
                        <p className="text-xl font-medium my-3">Please fill the form to confirm order</p>
                        {/* Fuull name */}
                        <input className="border-2 border-gray d-block py-1 px-2 w-full" defaultValue={user?.displayName} {...register("fullName", { required: true })} readOnly/>
                        {/* Email */}
                        <input className="border-2 border-gray d-block py-1 px-2 w-full my-2" defaultValue={user.email} {...register("email", { required: true })} readOnly/>
                        {/* Trip package name */}
                        <input className="border-2 border-gray d-block py-1 px-2 w-full my-2" defaultValue={service?.name} {...register("tripPackageName", { required: true })} readOnly/>
                        {/* Sending status */}
                        <input  style={{display:"none"}} defaultValue={"Pending"} {...register("status", { required: true })}/>
                        
                        {/* City */}
                        <input className="border-2 border-gray d-block py-1 px-2 w-full" placeholder="City" {...register("city", { required: true})} required/>
                        {/* Area pincode */}
                        <input className="border-2 border-gray d-block py-1 px-2 w-full mt-2" placeholder="Area pin code" type="number" {...register("phone")} required/>
                        {/* Address */}
                        <textarea className="border-2 border-gray d-block py-1 px-2 w-full my-2" placeholder="Address" {...register("address")} required/>
                        {/* Phone num */}
                        <input className="border-2 border-gray d-block py-1 px-2 w-full" placeholder="Phone" type="number" {...register("phone")} required/>
                        <input className="bg-yellow-500 py-1 px-4 text-white font-bold mt-2" type="submit" value="Confirm Booking" />
                    </form>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default ProcessingBooking;