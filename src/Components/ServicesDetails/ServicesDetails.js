import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServicesDetails.css';
import ServicesDetailsTab from './ServicesDetailsTab/ServicesDetailsTab'

const ServicesDetails = () => {

    const [serviceDetails, setServiceDetails] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sakil-sagor/teacher-data/main/fakeDb.JSON')
            .then(res => res.json())
            .then(data => setServiceDetails(data))

    }, [])

    const { idService } = useParams();
    let idServiceNumber = parseInt(idService);

    console.log(serviceDetails);

    let result = serviceDetails.find(service => service.id === idServiceNumber)
    console.log(result);



    return (
        <div >

            <div className="course-img-container pb-24">
                <h1 className="text-white font-bold text-6xl text-center">Course Details</h1>
            </div>


            <div className="container m-auto">
                <div class="grid grid-cols-12 gap-8 pt-20">
                    <div className="col-span-8">
                        <div>
                            <div>
                                <img className="rounded-lg w-3/4 m-auto" src={result?.img} alt="" />
                            </div>
                            <div className="">
                                <ServicesDetailsTab result={result}></ServicesDetailsTab>
                            </div>


                        </div>
                    </div>
                    <div className="col-span-4  ">
                        <div className="border-2 rounded-lg">
                            <br />
                            <div>
                                <h1 className="text-2xl font-bold text-pink-900 px-8">Course Features</h1>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className=" px-8">
                                <p className=" mb-3"><i class="far fa-address-card text-gray-500"></i> <span className="font-bold text-gray-600">Course : </span> <span>{result?.language}</span> </p>
                                <p className=" mb-3"><i class="fas fa-user text-gray-500"></i> <span className="font-bold text-gray-600">Enrolled : </span> <span>{result?.seat}</span> students</p>
                                <p className=" mb-3"><i class="far fa-clock text-gray-500"></i> <span className="font-bold text-gray-600">Duration : </span> <span>{result?.language}</span> </p>
                                <p className=" mb-3"><i class="far fa-calendar-check text-gray-500"></i> <span className="font-bold text-gray-600">Lactures : </span> <span>{result?.seat}</span> </p>
                                <p className=" mb-3"><i class="far fa-copy text-gray-500"></i> <span className="font-bold text-gray-600">Categories : </span> <span>{result?.Category}</span> </p>
                                <p className=" mb-3"><i class="fas fa-chalkboard-teacher text-gray-500"></i> <span className="font-bold text-gray-600">Instructor : </span> <span>{result?.teacher}</span> </p>


                            </div>
                            <br />
                            <div className="text-center bg-gray-300 py-8">
                                <h1 className="font-bold text-2xl text-gray-600">Price : <span className="font-bold text-pink-900">${result?.price}</span> </h1>
                                <br />
                                <button className="uppercase text-lg text-white px-2 py-2 bg-pink-700  hover:bg-pink-900 px-12  radiou rounded-full ">Enroll Course</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;

<i class="fas fa-chalkboard-teacher"></i>