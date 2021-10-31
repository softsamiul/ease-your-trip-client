import React from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const {services, setServices, preloader} = useServices();
    const {user} = useAuth();
    // useEffect(()=>{
    //     fetch('https://wicked-cemetery-44199.herokuapp.com/trips')
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[])

    if(preloader){
        return <img className="w-24 h-24 mx-auto" src="https://i.ibb.co/rxHTDRt/preloader.gif" alt="" />
    }
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