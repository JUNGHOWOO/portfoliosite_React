import React from "react";
import "./profile.css";
import ProfileImg from "../../../assets/about.jpg";
import CV from "../../../assets/JUNGHOWOO_CV.pdf";
import Info from "./Info.jsx";
import { profileKr } from '../../../assets/content_kr';

const Profile = () => {
    return (
        <section className="profile section" id="profile">
            <h2 className="section__title">{profileKr.title}</h2>
            <span className="section__subtitle">{profileKr.subtitle}</span>

            <div className="profile__container container grid">
                <img src={ProfileImg} alt="" className="profile__img" />
                <div className="profile__data">

                    <Info />

                    <p className="profile__description">
                    {profileKr.description}
                    </p>

                    <a download="" href={CV} className="button button--flex"><span>
                    {profileKr.button}&nbsp;&nbsp;<i class="bx bxs-note bx-flip-horizontal bx-tada"></i>
                    </span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Profile