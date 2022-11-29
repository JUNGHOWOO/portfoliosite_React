import React from "react";
import { portfolioEn } from '../../../assets/content_en';

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
                        <img src="/" alt="" class="work__img">
                            <h3 class="work__title">Death Traffic Accidents in Precipitation</h3>
                            <a href="#" class="work__button">Detail
                                <i class="bx bx-right-arrow-alt work__button-icon"></i>
                            </a>
                    </div>
                    <div class="work__card">
                        <img src="/static/media/db.cb754a70d36768dceb98.PNG" alt="" class="work__img">
                            <h3 class="work__title">AirBNB Database Reverse Enginnering</h3>
                            <a href="#" class="work__button">Detail
                                <i class="bx bx-right-arrow-alt work__button-icon">
                                </i>
                            </a>
                    </div>
                    <div class="work__card">
                        <img src="/static/media/rms.a15c79f8dfc8c16d2bf5.png" alt="" class="work__img">
                            <h3 class="work__title">Company Request Management System</h3>
                            <a href="#" class="work__button">Detail <i class="bx bx-right-arrow-alt work__button-icon">
                            </i>
                            </a>
                    </div><
                        div class="work__card">
                        <img src="/static/media/alert.276b3acd8f9552555879.PNG" alt="" class="work__img">
                            <h3 class="work__title">Intrusion Prevention System</h3><
                                a href="#" class="work__button">Detail
                                <i class="bx bx-right-arrow-alt work__button-icon">
                                </i>
                            </a>
                    </div>
                    <div class="work__card">
                        <img src="/static/media/portfolio.d65c170cea7c9b88bb3d.PNG" alt="" class="work__img">
                            <h3 class="work__title">Portfolio site</h3>
                            <a href="#" class="work__button">Detail
                                <i class="bx bx-right-arrow-alt work__button-icon">
                                </i>
                            </a>
                    </div>
                    <div class="work__card">
                        <img src="/static/media/commercial.2375b2d2256309bd99b8.PNG" alt="" class="work__img">
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