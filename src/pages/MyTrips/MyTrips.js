import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth/useAuth';

const MyTrips = () => {
    const {user} = useAuth();
    const [trips, setTrips] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:7000/orders')
        .then(res=>res.json())
        .then(trip => setTrips(trip))
    },[])
    const myOrders = trips.filter(trip => trip.email === user.email);
    console.log(myOrders)
    return (
        <div>
            <h2>My Trips</h2>

            <div>
                {
                    myOrders.map(myOrder => <div>

                        <p>{myOrder.fullName}</p>
                        <p>{myOrder.tripPackageName}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyTrips;