import React, { useEffect, useState } from 'react';

// custom hook for teachers components 

let useTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./tutorDb.json')
            .then(response => response.json())
            .then(data => setTeachers(data))
    }, []);
    return [teachers]
}
export default useTeachers;


