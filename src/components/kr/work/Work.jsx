import React, { Route, BrowserRouter, useHistory } from "react";
import { portfolioKr } from '../../../assets/content_kr';
import Works from "./Works";
import "./work.css";
import PP from "../../../assets/port_summary.pdf";


const Portfolio = () => {


    return (
        <section className="skills section" id="portfolio">
            <h2 className="section__title">{portfolioKr.title}</h2>
            <span className="section__subtitle">{portfolioKr.subtitle}</span>
            <Works />
            <a download="" href={PP} className="summary"><span>
                    포트폴리오 요약본 다운로드&nbsp;&nbsp;<i class="bx bxs-note bx-flip-horizontal bx-tada"></i>
                    </span>
                    </a>
           
        </section>
    )
}

export default Portfolio