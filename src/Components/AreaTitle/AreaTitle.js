import React from 'react';

const AreaTitle = (props) => {
    const { title, description } = props;
    return (
        <div>
            {/* all section title component  */}
            <div className="text-center">
                <h1 className="text-5xl font-semibold text-pink-900 uppercase">{title}</h1>
                <p className="text-xl font-semibold text-gray-400 py-4">{description}</p>
            </div>
            <hr className="w-16  border-pink-400 m-auto mb-8" />
        </div>
    );
};

export default AreaTitle;