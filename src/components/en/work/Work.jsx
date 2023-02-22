import React from "react";
import { portfolioEn } from '../../../assets/content_en';
import Works from "./Works";
import "./work.css";
import PP from "../../../assets/port_summary.pdf";

const Portfolio = () => {
    return (
        <section className="skills section" id="portfolio">
            <h2 className="section__title">{portfolioEn.title}</h2>
            <span className="section__subtitle">{portfolioEn.subtitle}</span>
        <Works />
        <a download="" href={PP} className="summary"><span>
                    Download Portfolio Summary&nbsp;&nbsp;<i class="bx bxs-note bx-flip-horizontal bx-tada"></i>
                    </span>
                    </a>
        </section>
    )
}

export default Portfolio