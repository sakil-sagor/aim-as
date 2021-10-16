import React from 'react';
import AreaTitle from '../AreaTitle/AreaTitle';


const ContactUs = () => {
    return (
        <div className="bg-gray-200 py-24">
            {/* Contact us page  */}
            <div className="container m-auto">
                <AreaTitle title="Contact Us" description="Send us a short text if you have any needed."></AreaTitle>
                <div className="w-3/4 m-auto">
                    <div className="w-full flex justify-between">
                        <input className="w-full mr-4 p-2" type="text" placeholder="First Name" />
                        <input className="w-full ml-4 p-2" type="text" placeholder="Last Name" />
                    </div>
                    <br />
                    <div>
                        <input className="w-full p-2" type=" text" placeholder="Your Email" />
                    </div>
                    <br />
                    <div>
                        <textarea className="w-full p-2" name="" id="" cols="30" rows="5" placeholder="Your Message"></textarea>
                    </div>
                    <br />
                    <div className="">
                        <button className="text-lg block m-auto text-white px-6 py-1 bg-pink-400 hover:bg-pink-700  radiou rounded-md ">Send</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;