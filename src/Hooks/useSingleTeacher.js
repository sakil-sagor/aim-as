

import React, { useEffect, useState } from 'react';

// custom hook for teachers components 

let useSingleTeacher = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('./single.json')
            .then(response => response.json())
            .then(data => setTeachers(data))
    }, []);
    return [teachers]
}
export default useSingleTeacher;










