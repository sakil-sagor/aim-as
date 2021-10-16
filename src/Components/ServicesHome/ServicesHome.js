import React from 'react';
import { NavLink } from 'react-router-dom';
import AreaTitle from '../AreaTitle/AreaTitle';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';
// services area for home page 
const ServicesHome = () => {
    // call custom hook 
    const [services] = useServices();
    return (
        <div className="bg-gray-200 py-24">
            <div className="container m-auto ">
                <AreaTitle title="Our Courses" description="The Best In Our School"></AreaTitle>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {

                        services.slice(0, 4).map(service => <Service key={service.id} service={service} ></Service>)
                    }
                </div>
                <div className=" m-auto text-center mt-12">
                    <NavLink to="/allServices">
                        <button className=" text-lg text-white px-3 py-1 bg-pink-700  hover:bg-pink-900 px-12  radiou rounded-lg ">Show All Courses</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ServicesHome;