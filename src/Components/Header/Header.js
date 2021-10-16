import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import pro1 from '../../images/pro1.png'
import ProfileShortcut from '../ProfileShortcut/ProfileShortcut';
import './Header.css'

const Header = () => {
    const { user, handelLogout } = useAuth();

    const [profileState, setProfileState] = useState('Off');


    // const profileToggle = (index) => {
    //     setProfileState(index);
    // }
    const toggleText = () => {
        setProfileState((state) => (state === "On" ? "Off" : "On"));
    };

    return (
        // header nav bar area 
        <div className="bg-pink-400	 ">
            <div className="container flex items-center	 justify-between m-auto p-4 text-white	">
                {/* logo area  */}
                <div className=" text-5xl	">
                    <NavLink className="font-extrabold	" to="/home"> Aim-AS.</NavLink >
                </div>
                {/* menu area  */}
                <div className=" flex items-center	justify-end	">
                    <div>
                        <NavLink className="manu-item p-2 text-lg font-bold" to="/home">Home</NavLink >
                        <NavLink className="manu-item p-2 text-lg font-bold" to="/allServices">Services</NavLink >
                        <NavLink className="manu-item p-2 text-lg font-bold" to="/teachers">Teachers</NavLink >
                        <NavLink className="manu-item p-2 text-lg font-bold" to="/about">About Us</NavLink >
                        <NavLink className="manu-item p-2 text-lg font-bold" to="/contact">Contact Us</NavLink >

                    </div>
                    <div>
                        {
                            user.email ?
                                <img style={{ cursor: 'pointer' }} onClick={toggleText} className="w-12" src={pro1} alt="" />
                                :
                                < NavLink className="manu-item p-2 text-lg font-bold bg-red-800 rounded-md" to="/login"> LogIn </NavLink >

                        }



                        {user.email ?
                            <div className={profileState === 'Off' ? "active-profile-icon-area" : 'profile-icon-area'}>
                                <ProfileShortcut ></ProfileShortcut>
                            </div>
                            :
                            ''}
                    </div>
                </div>





            </div>
        </div >

    );
};

export default Header;