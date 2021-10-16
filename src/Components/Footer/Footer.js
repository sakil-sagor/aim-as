import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    // font awesome 
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        // footer page 
        <div className="text-center  bg-pink-900">
            <div className="container m-auto">
                <div>
                    <div className="m-auto pt-6">
                        <a href="#"><i class="fab fa-facebook px-2 text-white text-3xl" ></i></a>
                        <a href="#"><i class="fab fa-linkedin-in px-2 text-white text-3xl"></i></a>
                        <a href="#"> <i class="fab fa-instagram-square px-2 text-white text-3xl"></i> </a>
                        <a href="#"> <i class="fab fa-pinterest-square px-2 text-white text-3xl"></i> </a>
                        <a href="#"> <i class="fab fa-accusoft px-2 text-white text-3xl"></i> </a>
                    </div>
                </div>
                <p className="p-6">© Copyright 2021 Aim-AS || Language School</p>
            </div>
        </div>
    );
};

export default Footer;