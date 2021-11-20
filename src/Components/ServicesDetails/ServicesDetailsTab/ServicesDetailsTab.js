import React, { useState } from 'react';
import FaqTab from '../FaqTab/FaqTab';
import './ServicesDetailsTab.css'

const ServicesDetailsTab = (props) => {
    let tabResult = props.result;

    const [toggleState, setToggleState] = useState(1);
    const toogleTab = (index) => {
        setToggleState(index);
    }






    return (
        <div className="course-area-all ">
            <div>
                <ul className="course-tab-list">
                    <li className={toggleState === 1 ? 'services-tabs services-active-tabs' : 'services-tabs'} onClick={() => toogleTab(1)} >Description</li>
                    <li className={toggleState === 2 ? 'services-tabs services-active-tabs' : 'services-tabs'} onClick={() => toogleTab(2)}>Curriculum</li>
                    <li className={toggleState === 3 ? 'services-tabs services-active-tabs' : 'services-tabs'} onClick={() => toogleTab(3)}>FAQ</li>
                    <li className={toggleState === 4 ? 'services-tabs services-active-tabs' : 'services-tabs'} onClick={() => toogleTab(4)}>Review</li>
                </ul >
            </div >

            <div className="tab-content-container">
                <div className={toggleState === 1 ? 'services-tab-content services-tab-active-content' : "services-tab-content"}>
                    <p className="p-4 text-gray-500 text-base leading-8 text-justify">{tabResult?.description}</p>
                </div>
                <div className={toggleState === 2 ? 'services-tab-content services-tab-active-content' : "services-tab-content"}>
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold">Overview</h2>
                        <p className="py-4 text-gray-500 text-base leading-8 text-justify">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab</p>
                    </div>

                </div>

                {/* faq question area  */}
                <div className={toggleState === 3 ? 'services-tab-content services-tab-active-content' : "services-tab-content"}>
                    <div>
                        <FaqTab
                            question="What is foreign language?"
                            answer="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab "
                        >
                        </FaqTab>
                    </div>
                    <div>
                        <FaqTab
                            question="What is foreign language?"
                            answer="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab "
                        >
                        </FaqTab>
                    </div>
                    <div>
                        <FaqTab
                            question="What is foreign language?"
                            answer="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab "
                        >
                        </FaqTab>
                    </div>


                </div>
                <div className={toggleState === 4 ? 'services-tab-content services-tab-active-content' : "services-tab-content"}>
                    <h1 >Hi is it ok?</h1>
                </div>
            </div>

        </div >
    );




};

export default ServicesDetailsTab;