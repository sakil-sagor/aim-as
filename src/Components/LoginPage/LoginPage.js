import React from 'react';
import './LoginPage.css'
import c1 from '../../images/c1.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const LoginPage = () => {
    const { error, setUser, setError, getEmail, getPassword, handelLogin, googleLogin } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || './home'


    const loginGoogle = () => {
        googleLogin()
            .then(result => {
                history.push(redirect_url);
            })
    }

    const customLogin = () => {

        handelLogin()
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                console.log(user);
                history.push(redirect_url);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }



    return (
        <div className="login-page">
            <div className="container m-auto py-32 grid grid-cols-12 gap-4 items-center	">
                <div className="col-span-6">
                    <h1 className="mb-8 text-5xl font-bold text-pink-700">Log In</h1>

                    <div>
                        <p>{error}</p>
                    </div>
                    <div className="w-3/4">
                        <form onSubmit={customLogin}>
                            <div >

                                <input onBlur={getEmail} className="w-full p-2 text-lg outline-none border-2 border-pink-100" type="email" placeholder="Your Email" />
                            </div>
                            <br />

                            <div>

                                <input onBlur={getPassword} className="w-full  p-2 text-lg outline-none border-2 border-pink-100" type="password" placeholder="Your Password" />

                            </div>

                            <br />

                            <input type="text" type="submit" className="cursor-pointer text-base block font-bold text-white px-4 py-2 uppercase bg-pink-700 hover:bg-pink-900
 radiou rounded-sm " value="login" />
                        </form>
                        <NavLink className="text-pink-700 font-bold underline text-right block forget-link hover:text-pink-900 hover:no-underline" to='/'> Forget password?</NavLink>
                    </div>

                    <div className="mt-8">
                        <p>Don't have a account?  <NavLink className="text-pink-700 font-bold underline	hover:text-pink-900 hover:no-underline " to="/register"> Create now</NavLink></p>

                    </div>
                    <div className="flex mt-8">
                        <button onClick={loginGoogle} className="mr-2 text-base block font-bold text-white px-4 py-2  bg-pink-700 hover:bg-pink-900
 radiou rounded-sm ">Google Login</button>
                        <button className="text-base block font-bold text-white px-4 py-2  bg-pink-700 hover:bg-pink-900
 radiou rounded-sm ">Facebook Login</button>
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

export default LoginPage;

