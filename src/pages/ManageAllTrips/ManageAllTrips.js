import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageAllTrips';
const ManageAllTrips = () => {
    const [trips, setTrips] = useState([]);
    const statusUpdate = trips.status;
    const [update, setUpdate] = useState('');
    const [preloader, setPreloader] = useState(true)
    useEffect(()=>{
        setPreloader(true)
        fetch('https://wicked-cemetery-44199.herokuapp.com/orders')
        .then(res=>res.json())
        .then(trip => {
            setTrips(trip)
            setPreloader(false)
        })
    },[trips])

    // Handle pending/approve function

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
           if(data.modifiedCount > 0){
               alert("Approved!")
           }
        })
    } 
    
    // Order cancel / remove function
    const handleCancel = (id) =>{
        fetch(`https://wicked-cemetery-44199.herokuapp.com/orders/${id}`, {
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data => {
            const query = window.confirm("Are you want to delete?");
            if(query){
                if(data.deletedCount > 0){
                    alert("Successfully Deleted!")
                    const remaining = trips.filter(trip => trip._id !== id);
                    setTrips(remaining)
                }
            }
        })
    }

    if(preloader){
        return <img className="w-24 h-24 mx-auto" src="https://i.ibb.co/rxHTDRt/preloader.gif" alt="" />
    }

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
                            trips.map(trip => <tr  key={trip._id}  trip={trip}>

                                <td>{trip.fullName}</td>
                                <td >{trip.tripPackageName}</td>
                                <td>{trip.status}</td>
                                <td className="flex items-center">
                                    <button onClick={()=>handleCancel(trip._id)} className="flex items-center bg-red-400 py-1 px-2 mr-2">
                                        <i className="fas fa-window-close text-white mr-2"></i>
                                        <span className="text-white">Cancel</span>
                                    </button>

                                    <button onClick={()=>handleConfirm(trip._id)} className="flex items-center bg-green-600 py-1 px-2">
                                        <i className="fas fa-check-square mr-2 text-white"></i>
                                        <span >Confirm</span>
                                    </button>
                                    
                                </td>
                            </tr>)
                        }
                        
                    </tbody>
                </Table>


            </div>

        </div>
    );
};

export default ManageAllTrips;