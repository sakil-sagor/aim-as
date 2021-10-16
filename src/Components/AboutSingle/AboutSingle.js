import React from 'react';

const AboutSingle = (props) => {
    const { title, desc } = props;
    return (
        // About page item components 
        <div className="p-6 text-center bg-white  shadow-xl rounded-xl">
            <h1 className="text-2xl font-semibold text-pink-900">{title}</h1>
            <p className="text-justify text-sm pt-4 text-gray-600 ">
                {desc}
            </p>
        </div>
    );
};

export default AboutSingle;