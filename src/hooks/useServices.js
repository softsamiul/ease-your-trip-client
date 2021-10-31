import { useEffect, useState } from "react";

const useServices = () =>{
    const [services, setServices] = useState([]);
    const [preloader, setPreloader] = useState(true)
    useEffect(()=>{
        const url = `https://wicked-cemetery-44199.herokuapp.com/trips`;
        setPreloader(true)
        fetch(url)
        .then(res=>res.json())
        .then(data=> {
            setServices(data)
            setPreloader(false)
        })
    },[])

    return {
        services,
        setServices,
        preloader
    }
}

export default useServices;