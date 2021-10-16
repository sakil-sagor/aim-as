import React, { useEffect, useState } from 'react';

// custom hook for services components 

let useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakeDb.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, []);
    return [services]
}
export default useServices;


