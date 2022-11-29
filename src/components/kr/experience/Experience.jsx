import React, { useState } from 'react';
import "./experience.css";
import { experienceKr } from '../../../assets/content_kr';

const Experience = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="experience section" id="experience">
            <h2 className="section__title">{experienceKr.title}</h2>
            <span className="section__subtitle">{experienceKr.subtitle}</span>

            <div className="experience__container container grid">
                <div className="experience__content">
                    <div>
                        <i className="uil uil-desktop-alt experience__icon"></i>
                        <h3 className="experience__title">{experienceKr.title1} <br /> {experienceKr._title1}</h3>
                    </div>

                    <span className="experience__button" onClick={() => toggleTab(1)}>
                        {experienceKr.button}
                        <i className="uil uil-arrow-right experience__button-icon"></i></span>
                    <div className={toggleState === 1 ? "experience__modal active-modal" : "experience__modal"}>
                        <div className="experience__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times experience__modal-close"></i>
                            <h3 className="experience__modal-title">{experienceKr.modaltitle1}</h3>
                            <p className="experience__modal-description">
                            {experienceKr.modaldescription1}
                            </p>

                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceKr.modalinfo1_1}
                                    </p>
                                </li>

                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceKr.modalinfo1_2}
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="experience__content">
                    <div>
                        <i className="uil uil-award experience__icon"></i>
                        <h3 className="experience__title">{experienceKr.title2}<br /> {experienceKr._title2}</h3>
                    </div>

                    <span className="experience__button" onClick={() => toggleTab(2)}>
                        {experienceKr.button}
                        <i className="uil uil-arrow-right experience__button-icon"></i></span>
                    <div className={toggleState === 2 ? "experience__modal active-modal" : "experience__modal"}>
                        <div className="experience__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times experience__modal-close"></i>
                            <h3 className="experience__modal-title">{experienceKr.modaltitle}</h3>
                            <p className="experience__modal-description">
                            {experienceKr.modaldescription2}
                            </p>
                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceKr.modalinfo2_1}
                                    </p>
                                </li>

                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceKr.modalinfo2_2}
                                    </p>
                                </li>

                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceKr.modalinfo2_3}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="experience__content">
                    <div>
                        <i className="uil uil-clipboard-alt experience__icon"></i>
                        <h3 className="experience__title">{experienceKr.title3} <br /> {experienceKr._title3}</h3>
                    </div>

                    <span className="experience__button" onClick={() => toggleTab(3)}>
                        {experienceKr.button}
                        <i className="uil uil-arrow-right experience__button-icon"></i></span>
                    <div className={toggleState === 3 ? "experience__modal active-modal" : "experience__modal"}>
                        <div className="experience__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times experience__modal-close"></i>
                            <h3 className="experience__modal-title">{experienceKr.modaltitle3}</h3>
                            <p className="experience__modal-description">
                            {experienceKr.modaldescription3}
                            </p>
                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceKr.modalinfo3_1}
                                    </p>
                                </li>

                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceKr.modalinfo3_2}
                                    </p>
                                </li>

                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceKr.modalinfo3_3}

                                    </p>
                                </li>

                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceKr.modalinfo3_4}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience