import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';
import Services from './Services';

const ConversationServices = () => {

    const [services] = useServices();
    let conversation = services.filter(basicService => basicService.Category === "Conversation")

    return (
        <div>
            <div className="container m-auto pt-12 pb-24">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {
                        conversation.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default ConversationServices;