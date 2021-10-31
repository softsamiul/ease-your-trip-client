import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../../shared/Service/Service';

const Services = () => {
    const {services, setServices, preloader} = useServices();

    if(preloader){
        return <img className="w-24 h-24 mx-auto" src="https://i.ibb.co/rxHTDRt/preloader.gif" alt="" />
    }
    return (
        <div>

            <h2 className="text-3xl font-medium pb-3 mt-8">Our Best Tour Services</h2>
            <hr className="w-11/12 md:w-1/5 mx-auto mb-4" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    services.map(service=><Service service={service} key={service._id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;