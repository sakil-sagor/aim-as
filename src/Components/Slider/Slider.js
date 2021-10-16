import React from 'react';
import imga2 from '../../images/a2.png'

// hero area 
const Slider = () => {
    return (
        <div className=" container m-auto py-24">
            <div className="slider h-4/5   grid grid grid-cols-12">
                <div className="col-span-6" >
                    <h1 className="text-6xl">Find the Best Courses</h1>
                    <h4 className="text-2xl my-6">All the top courses – from our school and the best our teachers.</h4>
                    <button className="text-lg px-4 py-2 text-white bg-pink-400 radiou hover:bg-pink-700  rounded-lg ">More Details.</button>
                </div >
                <div className="col-span-2">

                </div>
                <div className="col-span-4 w-full">
                    <img className="w-full" src={imga2} alt="" />
                </div>
            </div>
        </div >
    );
};

export default Slider;