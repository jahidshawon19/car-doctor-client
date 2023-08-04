import { useEffect } from "react";
import { useState } from "react";
import SingleService from "../SingleService/SingleService";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[])
    return (
        <div className="mt-5">
            <div className="text-center">
                <h3 className="text-3xl font=bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">All Services</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, error recusandae! Magni voluptas impedit, doloribus aliquam molestias sunt nam ipsum similique illo quam, perspiciatis minima odit? Ad eaque numquam eos.
                </p>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
                services.map(service=><SingleService
                    key={service._id}
                    serviceData = {service}
                ></SingleService>)
            }
        </div>



        </div>
    );
};

export default Services;