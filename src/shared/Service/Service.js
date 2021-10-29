import React from 'react';

const Service = ({service}) => {
    const {name, desc} = service;
    return (
        <div className="border-2 border-black p-2">
            <p>{name}</p>
            <p>{desc}</p>
            <div className="flex items-center justify-center">
                <button className="bg-indigo-500">Book Now</button>
                <button className="bg-indigo-500">Details</button>
            </div>
        </div>
    );
};

export default Service;