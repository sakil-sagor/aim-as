import React from 'react';
import { NavLink } from 'react-router-dom';
// single services components 
const Service = (props) => {
    // prpos from services hook 
    const { id, language, seat, price, img, teacher, description } = props.service;
    return (
        <div className=" shadow-2xl rounded-xl">
            <div className="service-img ">
                <img className="rounded-t-xl" src={img} alt="" />
            </div>
            <div className="p-4" >
                <div>
                    <h1 className="text-2xl font-semibold text-pink-900">{language} Course</h1>
                    <p className="text-gray-400">{description.substr(0, 100)}.</p>
                </div>

                <div className="flex items-center justify-between py-3 text-gray-600">
                    <h2>Tutor : <br /> {teacher}</h2>
                    <h2>Avaiable :<br /> {seat} Seats</h2>
                </div>
                <div className="flex items-center justify-between py-3">
                    <p className="text-pink-900 text-lg">Price: <span className="text-green-900 text-3xl">${price}</span></p>
                    <NavLink to={`allServices/${id}`}>
                        <button className="text-lg text-white px-3 py-1 bg-pink-400  hover:bg-pink-700   radiou rounded-lg ">Join Now</button>
                    </NavLink>
                </div>
            </div>
        </div >
    );
};

export default Service;