import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageAllTrips';
import SingleTrip from './SingleTrip/SingleTrip';
const ManageAllTrips = () => {
    const [trips, setTrips] = useState([]);
    const [update, setUpdate] = useState('');
    useEffect(()=>{
        fetch('https://wicked-cemetery-44199.herokuapp.com/orders')
        .then(res=>res.json())
        .then(trip => setTrips(trip))
    },[update])

    // Handle pending/approve function

    console.log(trips);

    const handleConfirm = (id) => {
        
        fetch(`https://wicked-cemetery-44199.herokuapp.com/orders/${id}`, {
            method:"PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(trips)
        })
        .then(res=>res.json())
        .then(data => {
           return console.log(data)
            // setUpdate("Approve");
            // if(data.modifiedCount > 0){
            //     alert('Successfully updated');
            // }
        })
        
        
        
    } 
    
    // Order cancel / remove function

    // const handleCancel = (id) =>{
    //     fetch(`https://wicked-cemetery-44199.herokuapp.com/orders/${id}`, {
    //         method:"PUT",
    //         headers: {
    //             'content-type': "application/json"
    //         },
    //         body: JSON.stringify(trips)
    //     })
    //     .then(res=>res.json())
    //     .then(data => {
            
    //         if(data.modifiedCount > 0){
    //             alert('Successfully updated');
    //         }
    //     })
    // }

    return (
        <div>
            <h2 className="text-4xl font-bold">Manage All Trips</h2>
            <hr className="w-1/4 mx-auto my-8" />
            <div className="w-11/12 md:w-8/12 mx-auto">
                <Table responsive className="table-fixed w-full text-left ">
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
                            trips.map(trip => <SingleTrip handleConfirm={handleConfirm}  key={trip._id} trip={trip}></SingleTrip>)
                        }
                        
                    </tbody>
                </Table>


            </div>

        </div>
    );
};

export default ManageAllTrips;