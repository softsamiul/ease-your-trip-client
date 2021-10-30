import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, desc, _id, thumbnail, price, rating, days, persons} = service;
    
    // const history = useHistory();
    // const goToDetailsPage = (id) => {
    //     const url = `/servicedetails/${id}`;
    //     history.push(url)
    // }

    return (
        <div className="p-4 single-service">
            <div>
                <img src={thumbnail} className="img-fluid rounded-lg" style={{height:"272px"}} alt="" />
            </div>
            <div style={{height:"190px"}}>
                <h2 className="text-2xl mt-2 font-base">{name}</h2>
                <div className="grid grid-cols-3 gap-3 py-1 my-1">
                    <p><i className="fas fa-user-friends"></i> {persons} Persons</p>
                    <p className="border-r border-l border-gray"><i className="fas fa-clock text-blue-900"></i> {days} Days</p>
                    <p><i className="fas fa-star text-yellow-500"></i> {rating} Rating</p>
                </div>
                <div>
                    <p className="text-justify">{desc.slice(0,150)}...</p>
                </div>
                <p className="text-2xl font-bold py-2"><i class="fas fa-rupee-sign"></i> {price}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
            
                <Link to={`/servicedetails/${_id}`} >
                    <button className="bg-indigo-500 w-full py-1 px-6 text-white font-bold">Details</button>
                </Link>
                <Link to={`/processbooking/${_id}`}>
                    <button className="bg-indigo-500 w-full py-1 px-6 text-white font-bold">Book Now</button>
                </Link>
                
                
            </div>
        </div>
    );
};

export default Service;