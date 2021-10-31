import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
const AddNewTrips = () => {
    
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://wicked-cemetery-44199.herokuapp.com/trips',data)
        .then(response => {
            console.log(response);
            if(response.data.insertedId){
                const url = '/home';
                history.push(url);
            }
        })
    };
    return (
        <div>
            <h2 className="text-3xl font-bold pb-3 mt-6">Add New Trip</h2>
            <hr className="mb-4 w-1/4 mx-auto" />

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center md:w-2/5 w-11/12 mx-auto mb-8">
                {/*Tour Package name */}
                <input className="border-2 border-gray d-block py-1 px-2 w-full" {...register("name", { required: true })} placeholder="Tour Package name" required/>
                {/* price */}
                <input className="border-2 border-gray d-block py-1 px-2 w-full my-2" type="number" placeholder="Price" {...register("price", { required: true })} required />
                {/* person*/}
                <input className="border-2 border-gray d-block py-1 px-2 w-full my-2" placeholder="How many persons?" type="number" {...register("persons", { required: true })} required/>
                {/* Days */}
                <input className="border-2 border-gray d-block py-1 px-2 w-full my-2" type="number" placeholder="How many days?" {...register("days", { required: true })} required/>
                {/* Rating */}
                <input className="border-2 border-gray d-block py-1 px-2 w-full my-2" placeholder="Add rating" type="number" {...register("rating", { required: true })} required/>
                {/* Thumbnail img url */}
                <input className="border-2 border-gray d-block py-1 px-2 w-full" placeholder="img URL" type="text" {...register("thumbnail", { required: true})} required/>
                {/* Address */}
                <textarea className="border-2 border-gray d-block py-1 px-2 w-full my-2" placeholder="Enter package description" {...register("desc")} required/>
                <input className="mt-2 bg-blue-900 py-1 px-3 text-white font-bold" type="submit" value="Add New Package" />
            </form>
        </div>
    );
};

export default AddNewTrips;