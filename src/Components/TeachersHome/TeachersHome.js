import React from 'react';
import { NavLink } from 'react-router-dom';
import useTeachers from '../../Hooks/useTeachers';
import AreaTitle from '../AreaTitle/AreaTitle';
import Teacher from '../Teacher/Teacher';

// home page teacher area 
const TeachersHome = () => {

    // call custom hoock 
    const [teachers] = useTeachers();
    return (
        <div className=" py-24 ">
            <div className="container m-auto ">
                <AreaTitle title="Our Teachers" description="The Best Tutors For your Learning"></AreaTitle>
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-4">
                    {
                        teachers.slice(0, 4).map(teacher => <Teacher key={teacher.id} teacher={teacher}></Teacher>)
                    }
                </div>
                <div className=" m-auto text-center mt-12">
                    <NavLink to="/teachers">
                        <button className=" text-lg text-white px-3 py-1 bg-pink-700  hover:bg-pink-900 px-12  radiou rounded-lg ">Show All Teachers.</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default TeachersHome;