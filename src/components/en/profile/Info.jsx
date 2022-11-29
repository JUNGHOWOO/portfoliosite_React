import React from "react";
import { profileEn } from '../../../assets/content_en';

const Info = () => {
    return (
        <div className="profile__info grid">
            <div className="profile__box">
                <i className="bx bxs-group profile__icon"></i>
                <h3 className="profile__title">{profileEn.title1}</h3>
                <span className="profile__subtitle">{profileEn.subtitle1}</span>
            </div>  

            <div className="profile__box">
                <i className="bx bxs-select-multiple profile__icon"></i>
                <h3 className="profile__title">{profileEn.title2}</h3>
                <span className="profile__subtitle">d{profileEn.subtitle2}</span>
            </div>  

            <div className="profile__box">
                <i className="bx bxs-downvote profile__icon"></i>
                <h3 className="profile__title">{profileEn.title3}</h3>
                <span className="profile__subtitle">not {profileEn.subtitle3}</span>
            </div>  
        </div>
    )
}

export default Info