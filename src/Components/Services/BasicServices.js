import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const BasicServices = () => {
    // hooks are call here 
    const [services] = useServices();

    let basicId = services.filter(basicService => basicService.Category === "Basic")
    console.log(basicId);
    return (
        <div>
            <div className="container m-auto pt-12 pb-24">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {
                        basicId.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default BasicServices;