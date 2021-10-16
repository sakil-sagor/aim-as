import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './ProfileShortcut.css'

const ProfileShortcut = () => {
    const { handelLogout } = useAuth();





    return (

        <div className="profile-shortcut">
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <h1>Name</h1>
                <button>View Profile</button>
            </div>
            <hr />
            <div>
                <NavLink to='/orderHistory'>Order History</NavLink>
                <br />
                <NavLink to='/pendingOrder'>Pending Order</NavLink>
                <br />
                <NavLink to='/myCourses'>My Courses</NavLink>
                <br />
                <NavLink to='/announcement'>Course Announcement </NavLink>
                <br />
                <button className="text-red-800" onClick={handelLogout}>Log Out</button>
            </div>
        </div>

    );
};

export default ProfileShortcut;