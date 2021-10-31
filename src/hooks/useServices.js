import { useEffect, useState } from "react";

const useServices = () =>{
    const [services, setServices] = useState([])
    useEffect(()=>{
        const url = `https://wicked-cemetery-44199.herokuapp.com/trips`;
        fetch(url)
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])

    return {
        services,
        setServices
    }
}

export default useServices;