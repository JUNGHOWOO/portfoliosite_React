import React from "react";
import { portfolioKr } from '../../../assets/content_kr';
import Works from "./Works";
import "./work.css";

const Portfolio = () => {

    

    return (
        <section className="skills section" id="portfolio">
            <h2 className="section__title">{portfolioKr.title}</h2>
            <span className="section__subtitle">{portfolioKr.subtitle}</span>
            <Works />
        </section>
    )
}

export default Portfolio