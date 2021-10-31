import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Contact = () => {
    const [userQuery, setUserQuery] = useState({})
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setUserQuery(data)
    };
    return (
        <div className="flex flex-col md:flex-row items-center w-11/12 mx-auto" style={{margin:"50px 0"}}>
            <div className="md:w-2/4 w-full text-left">
                <div className="md:w-3/5 w-full mx-auto"> 
                    <h2 className="text-2xl font-medium uppercase">Contact Us</h2>
                    <p className="text-gray-700">New Town, Kolkata, West Bengal, 700035, India <br /> Phone: +91 2341243290 <br/> Email: easemytrip@info.com </p>

                    <h2 className="text-2xl font-medium my-4">Drop your words here!</h2>
                    <div className="mt-2">
                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-2">
                                <div className="border border-1-blue p-1">
                                    <i className="fas fa-user mr-5 ml-2 text-blue-900"></i>
                                    <input placeholder="Enter name" className="outline-none" type="text" {...register("fullName", { required: true})} />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="border border-1-blue p-1">
                                    <i className="fas fa-envelope-open mr-5 ml-2 text-blue-900"></i>
                                    <input placeholder="Enter email" className="outline-none" type="email" {...register("email", { required: true})}  />
                                </div>
                            </div>
                            <div>
                                <div className="border border-1-blue p-1">
                                    <textarea defaultValue="Message" rows="4" cols="50" className="outline-none" type="input" {...register("message", { required: true})}></textarea>
                                </div>
                            </div>
                            <input type="submit" value="Send" className="block w-full font-medium py-1 my-2 px-12 bg-blue-900 text-white"/>
                        </form>
                    </div>
                </div>
            </div>
            <div className="md:w-2/4 w-full mt-6 md:mt-0">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58940.98410562246!2d88.45778134914175!3d22.586152154867523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275350398a5b9%3A0x75e165b244323425!2sNewtown%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1634642471127!5m2!1sen!2sin" width="600"  style={{border:0, height:"350px"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default Contact;