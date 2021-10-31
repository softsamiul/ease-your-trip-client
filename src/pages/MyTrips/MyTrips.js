import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';

const MyTrips = () => {
    const {user} = useAuth();
    const [trips, setTrips] = useState([]);
    const [preloader, setPreloader] = useState(true)
    useEffect(()=>{
        setPreloader(true)
        fetch('https://wicked-cemetery-44199.herokuapp.com/orders')
        .then(res=>res.json())
        .then(trip => {
            setTrips(trip)
            setPreloader(false)
        })
    },[])
    const myOrders = trips.filter(trip => trip.email === user.email);

    if(preloader){
        return <img className="w-24 h-24 mx-auto" src="https://i.ibb.co/rxHTDRt/preloader.gif" alt="" />
    }
    return (
        <div >
            <h2 className="text-3xl font-medium pb-3 mt-8">My Trips</h2>
            <hr className="w-11/12 md:w-1/5 mx-auto mb-4" />

            <div className='w-11/12 md:w-3/4 mx-auto'>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Trip Package</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           myOrders.map(myOrder =>  <tr key={myOrder._id}>
                                                        <td>{myOrder.fullName}</td>
                                                        <td>{myOrder.tripPackageName}</td>
                                                        <td>{myOrder.status}</td>
                                                    </tr>
                                        )
                       }
                    </tbody>
                </Table>
            </div>

            <NavLink to="/managealltrips"> <button className="py-1 my-6 rounded-lg px-4 bg-blue-900 text-white font-medium">Go To Manage Orders</button> </NavLink>
        </div>
    );
};

export default MyTrips;