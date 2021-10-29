import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const {services, setServices} = useServices();
    // useEffect(()=>{
    //     fetch('http://localhost:7000/trips')
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mx-auto">
                {
                    services.map(service=><Service service={service} key={service._id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;