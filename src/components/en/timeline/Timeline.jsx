import React, { useState } from 'react';
import "./timeline.css";
import { timelineEn } from '../../../assets/content_en';

const Timeline = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="timeline section" id='timeline'>
            <h2 className="section__title">{timelineEn.title}</h2>
            <span className="section__subtitle">{timelineEn.subtitle}</span>

            <div className="timeline__container container">
                <div className="timeline__tabs">
                    <div className={
                        toggleState === 1 
                        ? "timeline__button timeline__active button--flex" 
                        : "timeline__button button--flex"
                        }
                        onClick = {() => toggleTab(1)}
                        >
                        <i className="uil uil-graduation-cap timeline__icon">{timelineEn.gr_icon}</i>
                    </div>

                    <div className={
                        toggleState === 2 
                        ? "timeline__button timeline__active button--flex" 
                        : "timeline__button button--flex"
                        }
                        onClick = {() => toggleTab(2)}
                        >
                        <i className="uil uil-briefcase-alt timeline__icon">{timelineEn.ex_icon}</i>
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
                                <h3 className="timeline__title">{timelineEn.gr_title1}</h3>
                                <span className="timeline__subtitle">{timelineEn.gr_subtitle1}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineEn.gr_cal1}</i>
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
                                <h3 className="timeline__title">{timelineEn.gr_title2}</h3>
                                <span className="timeline__subtitle">{timelineEn.gr_subtitle2}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineEn.gr_cal2}</i>
                                </div>
                            </div>
                        </div>

                        <div className="timeline__data">
                            <div>
                                <h3 className="timeline__title">{timelineEn.gr_title3}</h3>
                                <span className="timeline__subtitle">{timelineEn.gr_subtitle3}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineEn.gr_cal3}</i>
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
                                <h3 className="timeline__title">{timelineEn.gr_title4}</h3>
                                <span className="timeline__subtitle">{timelineEn.gr_subtitle4}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineEn.gr_cal4}</i>
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
                                <h3 className="timeline__title">{timelineEn.gr_title5}</h3>
                                <span className="timeline__subtitle">{timelineEn.gr_subtitle5}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineEn.gr_cal5}</i>
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
                                <h3 className="timeline__title">{timelineEn.gr_title6}</h3>
                                <span className="timeline__subtitle">{timelineEn.gr_subtitle6}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineEn.gr_cal6}</i>
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
                                <h3 className="timeline__title">{timelineEn.ex_title1}</h3>
                                <span className="timeline__subtitle">{timelineEn.ex_subtitle1}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineEn.ex_cal1}</i>
                                </div>
                            </div>
                        </div>

                        <div className="timeline__data">
                            <div>
                                <h3 className="timeline__title">{timelineEn.ex_title2}</h3>
                                <span className="timeline__subtitle">{timelineEn.ex_subtitle2}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineEn.ex_cal2}</i>
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
                                <h3 className="timeline__title">{timelineEn.ex_title3}</h3>
                                <span className="timeline__subtitle">{timelineEn.ex_subtitle3}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineEn.ex_cal3}</i>
                                </div>
                            </div>
                        </div>

                        <div className="timeline__data">
                            <div>
                                <h3 className="timeline__title">{timelineEn.ex_title4}</h3>
                                <span className="timeline__subtitle">{timelineEn.ex_subtitle4}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineEn.ex_cal4}</i>
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
                                <h3 className="timeline__title">{timelineEn.ex_title5}</h3>
                                <span className="timeline__subtitle">{timelineEn.ex_subtitle5}</span>
                                <div className="timeline__calender">
                                    <i className="uil uil-calendar-alt">{timelineEn.ex_cal5}</i>
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