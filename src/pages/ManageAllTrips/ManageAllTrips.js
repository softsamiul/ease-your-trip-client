import React, { useEffect, useState } from 'react';

const ManageAllTrips = () => {
    const [trips, setTrips] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:7000/orders')
        .then(res=>res.json())
        .then(trip => setTrips(trip))
    },[])
    return (
        <div>
            <h2>Manage All Trips</h2>
        </div>
    );
};

export default ManageAllTrips;