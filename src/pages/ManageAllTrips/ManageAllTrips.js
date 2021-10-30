import React, { useEffect, useState } from 'react';
import SingleTrip from './SingleTrip/SingleTrip';

const ManageAllTrips = () => {
    const [trips, setTrips] = useState([]);
    const [tripStatus, setTripStatus] = useState('Pending')
    useEffect(()=>{
        fetch('http://localhost:7000/orders')
        .then(res=>res.json())
        .then(trip => setTrips(trip))
    },[])

    console.log(trips);
    
    
    return (
        <div>
            <h2 className="text-4xl font-bold">Manage All Trips</h2>
            <hr className="w-1/4 mx-auto my-8" />
            <div className="w-8/12 mx-auto">
                <table className="table-fixed w-full text-left">
                    <thead style={{height:"50px"}}>
                        <tr className="border border-gray bg-blue-100" >  
                            <th className="w-1/5 ...">Author</th>
                            <th className="w-2/5 ...">Trip Package Name</th>
                            <th className="w-1/5 ...">Status</th>
                            <th className="w-3/5 ...">Action</th>
                            {/* <th className="w-1/4 ...">Views</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trips.map(trip => <SingleTrip key={trip._id} trip={trip}></SingleTrip>)
                        }
                        
                    </tbody>
                </table>


            </div>

        </div>
    );
};

export default ManageAllTrips;