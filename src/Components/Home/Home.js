import React from 'react';
import Slider from '../Slider/Slider';
import ServicesHome from '../ServicesHome/ServicesHome';
import TeachersHome from '../TeachersHome/TeachersHome';

const Home = () => {
    return (
        <div>
            <div className=" ">
                {/* hero area  */}
                <Slider></Slider>
                {/* service area from services  */}
                <ServicesHome></ServicesHome>
                {/* Teacher area from teachers  */}
                <TeachersHome></TeachersHome>
            </div>
        </div>
    );
};

export default Home;