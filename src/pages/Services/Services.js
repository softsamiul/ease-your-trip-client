import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../../shared/Service/Service';

const Services = () => {
    const {services, setServices} = useServices();
    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    services.map(service=><Service service={service} key={service._id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;