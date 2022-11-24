import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"
                        }
                        onClick = {() => toggleTab(1)}
                        >
                        <i className="uil uil-graduation-cap qualification__icon">Education</i>
                    </div>

                    <div className={
                        toggleState === 2 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"
                        }
                        onClick = {() => toggleTab(2)}
                        >
                        <i className="uil uil-briefcase-alt qualification__icon">Experience</i>
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"
                        }
                        onClick = {() => toggleTab(1)}
                        >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2022 - Present</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Art Directior</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2022 - Present</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2020 - 2021</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2017 - 2022</i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"
                        }
                        onClick = {() => toggleTab(2)}
                        >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">Microsoft - spain</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2022 - Present</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Designer</h3>
                                <span className="qualification__subtitle">Apple Inc - spain</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2022 - Present</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">Figma - spain</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2020 - 2021</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification