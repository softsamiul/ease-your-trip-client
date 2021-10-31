import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const {id} = useParams();
    const [service, setService] = useState([])
    const url = `https://wicked-cemetery-44199.herokuapp.com/trips/${id}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    const {name, desc, _id, thumbnail, price, rating, days, persons} = service;
    
    return (
        <div className="p-4 single-service">
            <div className="w-11/12 md:w-2/4 mx-auto md:pl-8 mt-6">
                <div className=" mx-auto">
                    <div>
                        <img src={thumbnail} className="img-fluid rounded-lg mx-auto" style={{height:"272px"}} alt="" />
                        {/* <Player
                            playsInline
                            src="https://www.youtube.com/watch?v=aJdabaxLp1Y&t=42s"
                        /> */}
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
                    <div className="">
                        <Link to={`/processbooking/${_id}`}>
                            <button className="bg-yellow-500 w-full py-1 px-6 text-white font-bold">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceDetails;