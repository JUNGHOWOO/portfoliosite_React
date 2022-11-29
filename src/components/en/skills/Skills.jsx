import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import "./skills.css";
import { skillEn } from "../../../assets/content_en";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">{skillEn.title}</h2>
            <span className="section__subtitle">{skillEn.subtitle}</span>
            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
    )
}

export default Skills