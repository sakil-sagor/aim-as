import React from 'react';
import AreaTitle from '../AreaTitle/AreaTitle';
import useTeachers from '../../Hooks/useTeachers';
import Teacher from '../Teacher/Teacher';
const Teachers = () => {
    // call custom hoock 
    const [teachers] = useTeachers();


    // teacher page 
    return (
        <div className="container m-auto my-16">
            <AreaTitle title="Our Teachers" description="The Best Tutors For your Learning"></AreaTitle>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-4">
                {
                    teachers.map(teacher => <Teacher key={teacher.id} teacher={teacher}></Teacher>)
                }
            </div>
        </div>
    );
};

export default Teachers;