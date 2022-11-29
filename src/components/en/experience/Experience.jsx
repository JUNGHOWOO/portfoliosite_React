import React, { useState } from 'react';
import "./experience.css";
import { experienceEn } from '../../../assets/content_en';

const Experience = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="experience section" id="experience">
            <h2 className="section__title">{experienceEn.title}</h2>
            <span className="section__subtitle">{experienceEn.subtitle}</span>

            <div className="experience__container container grid">
                <div className="experience__content">
                    <div>
                        <i className="uil uil-desktop-alt experience__icon"></i>
                        <h3 className="experience__title">{experienceEn.title1} <br /> {experienceEn._title1}</h3>
                    </div>

                    <span className="experience__button" onClick={() => toggleTab(1)}>
                        {experienceEn.button}
                        <i className="uil uil-arrow-right experience__button-icon"></i></span>
                    <div className={toggleState === 1 ? "experience__modal active-modal" : "experience__modal"}>
                        <div className="experience__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times experience__modal-close"></i>
                            <h3 className="experience__modal-title">{experienceEn.modaltitle1}</h3>
                            <p className="experience__modal-description">
                            {experienceEn.modaldescription1}
                            </p>

                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceEn.modalinfo1_1}
                                    </p>
                                </li>

                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceEn.modalinfo1_2}
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="experience__content">
                    <div>
                        <i className="uil uil-award experience__icon"></i>
                        <h3 className="experience__title">{experienceEn.title2}<br /> {experienceEn._title2}</h3>
                    </div>

                    <span className="experience__button" onClick={() => toggleTab(2)}>
                        {experienceEn.button}
                        <i className="uil uil-arrow-right experience__button-icon"></i></span>
                    <div className={toggleState === 2 ? "experience__modal active-modal" : "experience__modal"}>
                        <div className="experience__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times experience__modal-close"></i>
                            <h3 className="experience__modal-title">{experienceEn.modaltitle}</h3>
                            <p className="experience__modal-description">
                            {experienceEn.modaldescription2}
                            </p>
                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceEn.modalinfo2_1}
                                    </p>
                                </li>

                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceEn.modalinfo2_2}
                                    </p>
                                </li>

                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceEn.modalinfo2_3}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="experience__content">
                    <div>
                        <i className="uil uil-clipboard-alt experience__icon"></i>
                        <h3 className="experience__title">{experienceEn.title3} <br /> {experienceEn._title3}</h3>
                    </div>

                    <span className="experience__button" onClick={() => toggleTab(3)}>
                        {experienceEn.button}
                        <i className="uil uil-arrow-right experience__button-icon"></i></span>
                    <div className={toggleState === 3 ? "experience__modal active-modal" : "experience__modal"}>
                        <div className="experience__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times experience__modal-close"></i>
                            <h3 className="experience__modal-title">{experienceEn.modaltitle3}</h3>
                            <p className="experience__modal-description">
                            {experienceEn.modaldescription3}
                            </p>
                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceEn.modalinfo3_1}
                                    </p>
                                </li>

                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceEn.modalinfo3_2}
                                    </p>
                                </li>

                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceEn.modalinfo3_3}

                                    </p>
                                </li>

                                <li className="experience__modal-service">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    {experienceEn.modalinfo3_4}
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