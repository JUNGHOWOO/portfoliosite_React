import React from "react";
import { portfolioKr } from '../../../assets/content_kr';

const Portfolio = () => {
    return (
        <section class="skills section" id="portfolio">
            <h2 class="section__title">Portfolio</h2>
            <span class="section__subtitle">My projects</span>
            <div><div class="work__filters">
                <span class="active-work work__item">all</span>
                <span class="work__item">full</span>
                <span class="work__item">front</span>
                <span class="work__item">back</span>
                <span class="work__item">etc</span>
            </div>
                <div class="work__container container grid">
                    <div class="work__card">
                        <img src="src\assets\RAIN.png" alt="" class="work__img" />
                            <h3 class="work__title">Death Traffic Accidents in Precipitation</h3>
                            <a href="#" class="work__button">Detail
                                <i class="bx bx-right-arrow-alt work__button-icon"></i>
                            </a>
                    </div>
                    <div class="work__card">
                        <img src='src\assets\DB.png' alt="" class="work__img"/>
                            <h3 class="work__title">AirBNB Database Reverse Enginnering</h3>
                            <a href="#" class="work__button">Detail
                                <i class="bx bx-right-arrow-alt work__button-icon">
                                </i>
                            </a>
                    </div>
                    <div class="work__card">
                        <img src="src\assets\RMS.png" alt="" class="work__img"/>
                            <h3 class="work__title">Company Request Management System</h3>
                            <a href="#" class="work__button">Detail <i class="bx bx-right-arrow-alt work__button-icon">
                            </i>
                            </a>
                    </div>
                    <div class="work__card">
                        <img src="src\assets\ALERT.png" alt="" class="work__img"/>
                            <h3 class="work__title">Intrusion Prevention System</h3><
                                a href="#" class="work__button">Detail
                                <i class="bx bx-right-arrow-alt work__button-icon">
                                </i>
                            </a>
                    </div>
                    <div class="work__card">
                        <img src="src\assets\PORT.png" alt="" class="work__img"/>
                            <h3 class="work__title">Portfolio site</h3>
                            <a href="#" class="work__button">Detail
                                <i class="bx bx-right-arrow-alt work__button-icon">
                                </i>
                            </a>
                    </div>
                    <div class="work__card">
                        <img src="src\assets\COMM.png" alt="" class="work__img"/>
                            <h3 class="work__title">Commercial Area Analysis</h3>
                            <a href="#" class="work__button">Detail
                                <i class="bx bx-right-arrow-alt work__button-icon">
                                </i>
                            </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio