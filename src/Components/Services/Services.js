import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

import Service from '../Service/Service';

// services page 

const Services = () => {
    // hooks are call here 
    const [services] = useServices();
    return (
        <div>
            <div className="container m-auto pt-12 pb-24">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;