import React, { useState } from 'react';
import './AllServices.css'
import { NavLink } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';
import Services from '../Services/Services';
import BasicServices from '../Services/BasicServices';
import MotherTongueServices from '../Services/MotherTongueServices';
import ConversationServices from '../Services/ConversationServices';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const AllServices = () => {
    const [toggleState, setToggleState] = useState(1);
    const toogleTab = (index) => {
        setToggleState(index);
    }
    return (
        <div className="services-area-all ">
            <div>
                <ul className="tab-list">
                    <li className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(1)} >All</li>
                    <li className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(2)}>Basic</li>
                    <li className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(3)}>Conversation</li>
                    <li className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(4)}>Mother Tongue</li>
                </ul >
            </div >

            <div className="tab-content-container">
                <div className={toggleState === 1 ? 'tab-content tab-active-content' : "tab-content"}>
                    <Services></Services>
                </div>
                <div className={toggleState === 2 ? 'tab-content tab-active-content' : "tab-content"}>

                    <BasicServices></BasicServices>
                </div>
                <div className={toggleState === 3 ? 'tab-content tab-active-content' : "tab-content"}>


                    <ConversationServices></ConversationServices>


                </div>
                <div className={toggleState === 4 ? 'tab-content tab-active-content' : "tab-content"}>
                    <MotherTongueServices></MotherTongueServices>
                </div>
            </div>

        </div >
    );
};

export default AllServices;