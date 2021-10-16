import React from 'react';
import c1 from '../../images/c1.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { error, getEmail, getPassword, handelRegister, googleLogin } = useAuth();
    return (
        <div className="login-page">
            <div className="container m-auto py-32 grid grid-cols-12 gap-4 items-center	">
                <div className="col-span-6">
                    <h1 className="mb-8 text-4xl font-bold text-pink-700">Register Now</h1>

                    <div className="w-3/4">
                        <div>
                            <p className="text-red-600 font-semibold" >{error}</p>
                        </div>
                        <br />
                        <form onSubmit={handelRegister}>
                            <div >
                                <input className="w-full p-2 text-lg outline-none border-2 border-pink-100" type="text" placeholder="Full Name" />
                            </div>
                            <br />
                            <div >
                                <input onBlur={getEmail} className="w-full p-2 text-lg outline-none border-2 border-pink-100" type="email" placeholder="Your Email" />
                            </div>
                            <br />
                            <div>
                                <input className="w-full  p-2 text-lg outline-none border-2 border-pink-100" type="number" placeholder="Phone Number" />
                            </div>
                            <br />
                            <div>
                                <input onBlur={getPassword} className="w-full  p-2 text-lg outline-none border-2 border-pink-100" type="password" placeholder="Your Password" />
                            </div>
                            <br />
                            <input type="text" type="submit" className="cursor-pointer	 text-base block font-bold text-white px-4 py-2 uppercase bg-pink-700 hover:bg-pink-900 radiou rounded-sm " value="Sign Up" />
                        </form>
                    </div>
                    <div className="mt-8">
                        <p>Already have an account?  <NavLink className="text-pink-700 font-bold underline	hover:text-pink-900 hover:no-underline " to="/login"> Sign In</NavLink></p>

                    </div>
                    <div className="flex mt-8">
                        <button onClick={googleLogin} className="mr-2 text-base block font-bold text-white px-4 py-2  bg-pink-700 hover:bg-pink-900 radiou rounded-sm ">Google Login</button>

                        <button className="text-base block font-bold text-white px-4 py-2  bg-pink-700 hover:bg-pink-900 radiou rounded-sm ">Facebook Login</button>
                    </div>
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-4">
                    <img className="w-full" src={c1} alt="" />
                </div>

            </div>
        </div >
    );
};

export default Register;