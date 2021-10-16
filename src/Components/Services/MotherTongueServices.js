import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const MotherTongueServices = () => {

    const [services] = useServices();
    let motherToung = services.filter(basicService => basicService.Category === "Mother tongue")

    return (
        <div>
            <div className="container m-auto pt-12 pb-24">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {
                        motherToung.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default MotherTongueServices;