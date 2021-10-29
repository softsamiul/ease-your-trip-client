import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {name, desc, _id} = service;
    
    // const history = useHistory();
    // const goToDetailsPage = (id) => {
    //     const url = `/servicedetails/${id}`;
    //     history.push(url)
    // }

    return (
        <div className="border-2 border-black p-2">
            <p>{name}</p>
            <p>{desc}</p>
            <div className="flex items-center justify-center">
                <Link to={`/processbooking/${_id}`}>
                    <button className="bg-indigo-500">Book Now</button>
                </Link>
                
                <Link to={`/servicedetails/${_id}`} >
                    <button className="bg-indigo-500">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;