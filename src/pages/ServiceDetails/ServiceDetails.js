import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {id} = useParams();
    const [service, setService] = useState([])
    const url = `http://localhost:7000/trips/${id}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    console.log(id)
    // console.log(service);
    
    return (
        <div>
            <h2>Details</h2>
            <h4>{service.name}</h4>
        </div>
    );
};

export default ServiceDetails;