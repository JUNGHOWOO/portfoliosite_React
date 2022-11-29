import React from "react";
import "./profile.css";
import ProfileImg from "../../../assets/about.jpg";
import CV from "../../../assets/John-Cv.pdf";
import Info from "./Info.jsx";
import { profileEn } from '../../../assets/content_en';

const Profile = () => {
    return (
        <section className="profile section" id="profile">
            <h2 className="section__title">{profileEn.title}</h2>
            <span className="section__subtitle">{profileEn.subtitle}</span>

            <div className="profile__container container grid">
                <img src={ProfileImg} alt="" className="profile__img" />
                <div className="profile__data">

                    <Info />

                    <p className="profile__description">
                    {profileEn.description}
                    </p>

                    <a download="" href={CV} className="button button--flex">
                    {profileEn.button}&nbsp;&nbsp;<i class="bx bxs-note bx-flip-horizontal bx-tada"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Profile