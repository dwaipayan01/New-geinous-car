import React from 'react';
import "./Experts.css";
import Expert from "../Expert/Expert";
import expert1 from "../../../images/experts/expert-1.jpg"
import expert2 from "../../../images/experts/expert-2.jpg"
import expert3 from "../../../images/experts/expert-3.jpg"
import expert4 from "../../../images/experts/expert-4.jpg"
import expert5 from "../../../images/experts/expert-5.jpg"
import expert6 from "../../../images/experts/expert-6.png"

const Experts = () => {
    const experts = [
        { id: 1, name: "Willam smith", img: expert1 },
        { id: 2, name: "Dwayan smith", img: expert2 },
        { id: 3, name: "Sheksper", img: expert3 },
        { id: 4, name: "Jonaton cat", img: expert4 },
        { id: 5, name: "Robin shek", img: expert5 },
        { id: 6, name: "Jason roy", img: expert6 }
    ]
    return (
        <div id="experts">
            <h1 className='text-primary text-center mt-5 '>Our experts</h1>
            <div className='display-container container' >
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;