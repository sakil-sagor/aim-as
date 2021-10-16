import React from 'react';
import AboutSingle from '../AboutSingle/AboutSingle';
import a1 from '../../images/a1.png'
import a2 from '../../images/a2.png'

const AboutUs = () => {
    return (
        // About page 
        <div className="bg-gray-200 pt-24">

            <div className="container m-auto bg-gray-200">
                {/* About page top area  */}
                <div className="shadow-xl  bg-white grid grid-cols-12 gap-4 ">
                    <div className="pb-24 pt-16 p-4 col-span-7 ">
                        <h1 className="text-4xl mb-8 font-semibold text-pink-900">A Power for Good</h1>
                        <p className="text-justify   text-gray-600 ">We believe that free education, more than anything, has the power to break through boundaries and transform lives.
                            <br />
                            <br />
                            Alison is one of the world’s largest free learning platforms for education and skills training. It is a for-profit social enterprise dedicated to making it possible for anyone, to study anything, anywhere, at any time, for free online, at any subject level. Through our mission we are a catalyst for positive social change, creating opportunity, prosperity, and equality for everyone.</p>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-4 ">
                        <img className="w-" src={a2} alt="" />
                    </div>
                </div>

                {/* about page props AboutSingle component here */}

                <div className="my-24">
                    <h1 className="text-4xl mb-8 text-center font-semibold text-pink-900">Our Values</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <AboutSingle
                            title="Empowerment"
                            desc="We are driven by our belief in the power of free education and skills training to change people’s lives for the better and are passionate about providing an overall learning experience that meets their needs and helps them to achieve life goals."
                        ></AboutSingle>
                        <AboutSingle
                            title="Knowledge"
                            desc="We are experts in the field of online education and are rigorous in delivering high quality learning materials, services and experiences that deliver the learning outcomes we have promised. "
                        ></AboutSingle>
                        <AboutSingle
                            title="Inclusivity"
                            desc="We are inspired by the UN Declaration that “everyone is entitled to a free education”. We are committed to equality and access to education irrespective of gender, geography, economic status or any other barriers to access."
                        ></AboutSingle>
                        <AboutSingle
                            title="Innovation"
                            desc="We will not be constrained by what already exists but will lead the way in introducing new ways to achieve our mission. Our DNA is entrepreneurial and we understand and embrace the pioneering spirit that motivates other entrepreneurs. "
                        ></AboutSingle>
                    </div>
                </div>
                {/* About page bottom area  */}
                <div className="shadow-xl  bg-white grid grid-cols-12 gap-4 items-center ">
                    <div className="col-span-4">
                        <img className="w-4/5 " src={a1} alt="" />
                    </div>

                    <div className="ml-8 pb-24 pt-16 col-span-8 p-4">
                        <h1 className="text-3xl mb-8 font-semibold text-pink-900">
                            The better we do, the more good we can do.
                        </h1>
                        <p className="text-justify   text-gray-600 ">
                            Alison was founded in Galway, Ireland, in 2007 and has grown organically to become a major force in free online education and skills training. Today, with more than 20 million learners in 195 countries, Alison is changing how the world learns and up-skills.
                            <br />
                            <br />

                            We are committed to equality and access to education and skills training irrespective of gender, geography, economic status or any other barriers that can so often stunt potential. So we offer a range of free courses that meet the many diverse needs of our learners. The UN declared in Article 26 of the 1946 Declaration of Human Rights that “Education shall be free…”. This statement will always inspire us.
                            <br />
                            <br />
                            Alison was founded by Alison CEO, Mike Feerick. Mike is a businessman, but one with a difference. He believes in social impact, and that you can build a financially successful business focused on meeting a huge global social need, making education and skills training more accessible for everyone. He invites anyone who believes that too, to support the Alison mission.
                            <br />
                            <br />
                            Alison is free of charge to you. But it’s still a business – albeit a socially-focused one. We are a social enterprise making our money through advertising, merchandise, and the sale of Certificates and Diplomas, should a graduate choose to buy one.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AboutUs;