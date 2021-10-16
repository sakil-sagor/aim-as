import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Teacher = (props) => {

    const { id, teacher, img, description, language } = props.teacher;



    // teacher deatil area 
    return (
        <div className="flex items-center">
            <div className="mr-4 	">
                <img className="rounded-lg " src={img} alt="" />
            </div>
            <div>
                <h1 className="text-2xl font-semibold text-pink-900">{teacher}</h1>
                <p className="text-gray-600">{language} Expert</p>
                <p className="text-gray-400 my-2"> {description.substr(0, 100)}. </p>
                <Link to={`/teachers/${id}`}>

                    <button className="text-lg text-white px-3 py-1 bg-pink-400  hover:bg-pink-700   radiou rounded-lg ">View Profile</button>

                </Link>
            </div>

        </div>
    );
};

export default Teacher;