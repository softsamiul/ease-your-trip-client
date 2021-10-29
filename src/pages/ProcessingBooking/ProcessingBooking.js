import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProcessingBooking = () => {
    const {id} = useParams();

    const [service, setService] = useState([])
    const url = `http://localhost:7000/trips/${id}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <h2>Process booking</h2>
        </div>
    );
};

export default ProcessingBooking;