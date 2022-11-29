import React, { useState } from 'react';
import "./timeline.css";
import { timelineKr } from '../../../assets/content_kr';

const Timeline = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="timeline section" id='timeline'>
            <h2 className="section__title">{timelineKr.title}</h2>
            <span className="section__subtitle">{timelineKr.subtitle}</span>

            <div className="timeline__container container">
                <div className="timeline__tabs">
                    <div className={
                        toggleState === 1 
                        ? "timeline__button timeline__active button--flex" 
                        : "timeline__button button--flex"
                        }
                        onClick = {() => toggleTab(1)}
                        >
                        <i className="uil uil-graduation-cap timeline__icon">{timelineKr.gr_icon}</i>
                    </div>

                    <div className={
                        toggleState === 2 
                        ? "timeline__button timeline__active button--flex" 
                        : "timeline__button button--flex"
                        }
                        onClick = {() => toggleTab(2)}
                        >
                        <i className="uil uil-briefcase-alt timeline__icon">{timelineKr.ex_icon}</i>
                    </div>
                </div>

                <div className="timeline__sections">
                    <div className={toggleState === 1 
                        ? "timeline__content timeline__content-active" 
                        : "timeline__content"
                        }
                        onClick = {() => toggleTab(1)}
                        >
                        <div className="timeline__data">
                            <div>
                                <h3 className="timeline__title">{timelineKr.gr_title1}</h3>
                                <span className="timeline__subtitle">{timelineKr.gr_subtitle1}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineKr.gr_cal1}</i>
                                </div>
                            </div>
                            <div>
                                <span className="timeline__rounder"></span>
                                <div className="timeline__line"></div>
                            </div>
                        </div>

                        <div className="timeline__data">
                            <div></div>

                            <div>
                                <span className="timeline__rounder"></span>
                                <span className="timeline__line"></span>
                            </div>

                            <div>
                                <h3 className="timeline__title">{timelineKr.gr_title2}</h3>
                                <span className="timeline__subtitle">{timelineKr.gr_subtitle2}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineKr.gr_cal2}</i>
                                </div>
                            </div>
                        </div>

                        <div className="timeline__data">
                            <div>
                                <h3 className="timeline__title">{timelineKr.gr_title3}</h3>
                                <span className="timeline__subtitle">{timelineKr.gr_subtitle3}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineKr.gr_cal3}</i>
                                </div>
                            </div>
                            <div>
                                <span className="timeline__rounder"></span>
                                <div className="timeline__line"></div>
                            </div>
                        </div>

                        <div className="timeline__data">
                            <div></div>

                            <div>
                                <span className="timeline__rounder"></span>
                                <span className="timeline__line"></span>
                            </div>

                            <div>
                                <h3 className="timeline__title">{timelineKr.gr_title4}</h3>
                                <span className="timeline__subtitle">{timelineKr.gr_subtitle4}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineKr.gr_cal4}</i>
                                </div>
                            </div>
                        </div>
                        <div className="timeline__data">
                            <div></div>

                            <div>
                                <span className="timeline__rounder"></span>
                                <span className="timeline__line"></span>
                            </div>

                            <div>
                                <h3 className="timeline__title">{timelineKr.gr_title5}</h3>
                                <span className="timeline__subtitle">{timelineKr.gr_subtitle5}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineKr.gr_cal5}</i>
                                </div>
                            </div>
                        </div>
                        <div className="timeline__data">
                            <div></div>

                            <div>
                                <span className="timeline__rounder"></span>
                                <span className="timeline__line"></span>
                            </div>

                            <div>
                                <h3 className="timeline__title">{timelineKr.gr_title6}</h3>
                                <span className="timeline__subtitle">{timelineKr.gr_subtitle6}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineKr.gr_cal6}</i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 
                        ? "timeline__content timeline__content-active" 
                        : "timeline__content"
                        }
                        onClick = {() => toggleTab(2)}
                        >

                        <div className="timeline__data">
                            <div></div>

                            <div>
                                <span className="timeline__rounder"></span>
                                <span className="timeline__line"></span>
                            </div>

                            <div>
                                <h3 className="timeline__title">{timelineKr.ex_title1}</h3>
                                <span className="timeline__subtitle">{timelineKr.ex_subtitle1}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineKr.ex_cal1}</i>
                                </div>
                            </div>
                        </div>

                        <div className="timeline__data">
                            <div>
                                <h3 className="timeline__title">{timelineKr.ex_title2}</h3>
                                <span className="timeline__subtitle">{timelineKr.ex_subtitle2}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineKr.ex_cal2}</i>
                                </div>
                            </div>
                            <div>
                                <span className="timeline__rounder"></span>
                                <div className="timeline__line"></div>
                            </div>
                        </div>

                        <div className="timeline__data">
                            <div></div>

                            <div>
                                <span className="timeline__rounder"></span>
                                <span className="timeline__line"></span>
                            </div>

                            <div>
                                <h3 className="timeline__title">{timelineKr.ex_title3}</h3>
                                <span className="timeline__subtitle">{timelineKr.ex_subtitle3}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineKr.ex_cal3}</i>
                                </div>
                            </div>
                        </div>

                        <div className="timeline__data">
                            <div>
                                <h3 className="timeline__title">{timelineKr.ex_title4}</h3>
                                <span className="timeline__subtitle">{timelineKr.ex_subtitle4}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineKr.ex_cal4}</i>
                                </div>
                            </div>
                            <div>
                                <span className="timeline__rounder"></span>
                                <div className="timeline__line"></div>
                            </div>
                        </div>

                        <div className="timeline__data">
                            <div></div>

                            <div>
                                <span className="timeline__rounder"></span>
                                <span className="timeline__line"></span>
                            </div>

                            <div>
                                <h3 className="timeline__title">{timelineKr.ex_title5}</h3>
                                <span className="timeline__subtitle">{timelineKr.ex_subtitle5}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineKr.ex_cal5}</i>
                                </div>
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline