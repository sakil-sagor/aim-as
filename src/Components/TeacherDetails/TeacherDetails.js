import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeacherDetails.css'

const TeacherDetails = () => {

    const [singelTeacher, setSingleTeacher] = useState([]);
    useEffect(() => {

        fetch('https://raw.githubusercontent.com/sakil-sagor/teacher-data/main/tutorDb.JSON')
            .then(res => res.json())
            .then(data => setSingleTeacher(data))
    }, []);



    const { idTeacher } = useParams();
    let idNumber = parseInt(idTeacher);


    // let newArray = {};
    // let result = singelTeacher.map(single => {
    //     if (single.id === idNumber) {
    //         newArray = single;
    //         console.log(newArray);
    //     }
    // })
    // console.log(newArray);
    // console.log(singelTeacher);


    // soluaton 1 
    //     const [matchTeacher, setMatchTeacher] = useState({});
    //     useEffect(() => {
    //         let result = singelTeacher.find(num => num.id === idNumber)
    //         setMatchTeacher(result)
    //     }, [idNumber, singelTeacher])
    //     console.log(matchTeacher);



    let result = singelTeacher.find(num => num.id === idNumber)


    // console.log(result.teacher);

    return (
        <div>
            <div className=" t-banner">
                <div className="container m-auto text-white grid items-center grid-cols-2 gap-4 justify-between">
                    <div className="flex items-center tracking-wide	">
                        <div className="mr-8">
                            <img className="rounded-full h-40 w-40 flex items-center justify-center" src={result?.img} alt="" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold  ">{result?.teacher}</h1>
                            <h2 className="text-xl my-3 uppercase">{result?.language} Teacher</h2>
                            <button className="border-solid border-2 py-1 px-2 border-light-blue-500 mr-4">Message Me</button>
                            <button className="border-solid border-2 py-1 px-2  border-light-blue-500">Follow Me</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-end ">
                        <div className="mx-8">
                            <h1 className="text-center text-4xl font-bold">{result?.courses}</h1>
                            <h1 className="text-center text-2xl uppercase mt-2">Courses</h1>
                        </div>
                        <div className="mx-8">
                            <h1 className="text-center text-4xl font-bold">{result?.followers}</h1>
                            <h1 className="text-center text-2xl uppercase mt-2">FOLLOWERS</h1>
                        </div>
                        <div className="ml-8">
                            <h1 className="text-center text-4xl font-bold">{result?.rating}</h1>
                            <h1 className="text-center text-2xl uppercase mt-2">RATING</h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container m-auto grid items-center gap-x-12	 grid-cols-12  justify-between py-16">
                <div className="col-span-6">
                    <h1 className="text-4xl font-bold text-gray-400 py-8">About {result?.teacher}</h1>
                    <p className="text-gray-400 leading-8 text-lg tracking-wide">{result?.description}</p>
                </div>
                <div className="col-span-2">
                </div>
                <div className="col-span-4 ">
                    <div className="flex items-center justify-between text-gray-400 py-4 border-b-2 ">
                        <p><i className="fas fa-envelope icon-teacher text-3xl pl-5"></i></p>
                        <h3 className="text-lg">Mail : {result?.email}</h3>
                    </div>
                    <div className="flex items-center justify-between text-gray-400 py-4 border-b-2 ">
                        <p><i class="fas fa-phone text-3xl pl-5"></i></p>
                        <h3 className="text-lg">Phone :{result?.phone}</h3>
                    </div>
                    <div className="flex items-center justify-between text-gray-400 py-4 border-b-2 ">
                        <p><i class="fab fa-skype text-3xl pl-5"></i></p>
                        <h3 className="text-lg">Skype : {result?.skype}</h3>
                    </div>
                    <div className="flex items-center justify-between text-gray-400 py-4 border-b-2 ">
                        <p><i class="fas fa-link text-3xl pl-5"></i></p>
                        <h3 className="text-lg">Web : {result?.web}</h3>
                    </div>


                </div>

            </div>










        </div>
    );
};

export default TeacherDetails;