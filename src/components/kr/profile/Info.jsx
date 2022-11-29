import React from "react";
import { profileKr } from '../../../assets/content_kr';

const Info = () => {
    return (
        <div className="profile__info grid">
            <div className="profile__box">
                <i className="bx bxs-group profile__icon"></i>
                <h3 className="profile__title">{profileKr.title1}</h3>
                <span className="profile__subtitle">{profileKr.subtitle1}</span>
            </div>  

            <div className="profile__box">
                <i className="bx bxs-select-multiple profile__icon"></i>
                <h3 className="profile__title">{profileKr.title2}</h3>
                <span className="profile__subtitle">d{profileKr.subtitle2}</span>
            </div>  

            <div className="profile__box">
                <i className="bx bxs-downvote profile__icon"></i>
                <h3 className="profile__title">{profileKr.title3}</h3>
                <span className="profile__subtitle">not {profileKr.subtitle3}</span>
            </div>  
        </div>
    )
}

export default Info