import React from 'react';
import useSingleTeacher from '../../Hooks/useSingleTeacher';


const SingleTeacherDetails = (props) => {

    const [teachers] = useSingleTeacher();
    console.log(teachers);

    return (
        <div>
            hello
        </div>
    );
};

export default SingleTeacherDetails;