import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth/useAuth';

const MyTrips = () => {
    const {user} = useAuth();
    const [trips, setTrips] = useState([]);
    useEffect(()=>{
        fetch('https://wicked-cemetery-44199.herokuapp.com/orders')
        .then(res=>res.json())
        .then(trip => setTrips(trip))
    },[])
    const myOrders = trips.filter(trip => trip.email === user.email);
    console.log(myOrders)
    return (
        <div>
            <h2>My Trips</h2>

            <Table responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <th key={index}>Table heading</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                    </tr>
                    <tr>
                    <td>2</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                    </tr>
                    <tr>
                    <td>3</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                    </tr>
                </tbody>
            </Table>

            {/* <div>
                {
                    myOrders.map(myOrder => <div>

                        <p>{myOrder.fullName}</p>
                        <p>{myOrder.tripPackageName}</p>
                    </div>)
                }
            </div> */}
        </div>
    );
};

export default MyTrips;