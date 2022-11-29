import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import "./skills.css";
import { skillKr } from "../../../assets/content_kr";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">{skillKr.title}</h2>
            <span className="section__subtitle">{skillKr.subtitle}</span>
            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
    )
}

export default Skills