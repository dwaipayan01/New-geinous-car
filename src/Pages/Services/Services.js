import React, { useEffect, useState } from 'react';
import Service from './Servic/Service';
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("Services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='text-primary text-center mt-5'>Our Services</h1>
            <div className="services-container container text-center">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;