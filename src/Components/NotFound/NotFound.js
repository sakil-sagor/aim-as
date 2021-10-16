import React from 'react';
import './NotFound.css'
// page not found area 
const NotFound = () => {
    return (
        <div className="not-found pt-16">
            <h1 className="text-9xl m-auto text-center text-red-600">404</h1>
            <h2 className="text-4xl m-auto text-center text-black-600">Page Not Found</h2>
        </div>
    );
};

export default NotFound;