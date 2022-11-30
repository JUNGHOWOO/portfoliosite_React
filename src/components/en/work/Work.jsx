import React from "react";
import { portfolioEn } from '../../../assets/content_en';
import Works from "./Works";
import "./work.css";

const Portfolio = () => {
    return (
        <section className="skills section" id="portfolio">
            <h2 className="section__title">{portfolioEn.title}</h2>
            <span className="section__subtitle">{portfolioEn.subtitle}</span>
        <Works />
        </section>
    )
}

export default Portfolio