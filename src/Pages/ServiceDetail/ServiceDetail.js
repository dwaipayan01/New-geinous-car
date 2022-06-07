import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const handleCheckout = () => {
        navigate("/checkout");
    }
    return (
        <div>
            <h1 className="text-center mt-5 text-primary">Welcome to service detail:{serviceId}</h1>
            <div className="text-center mt-5">
                <button onClick={handleCheckout} className="btn btn-primary ">Proced Checkout</button>
            </div>
        </div>
    );
};

export default ServiceDetail;