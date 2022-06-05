import React from 'react';
import "./Expert.css";

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div>
            <div className="display text-center mt-5">
                <img src={img} alt="" />
                <h4>{name}</h4>
                <button className="btn btn-primary">Book now</button>
            </div>
        </div>
    );
};

export default Expert;