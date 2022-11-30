import React from "react";
import { portfolioKr } from '../../../assets/content_kr';

const WorksItems = ({ item }) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <a href="#" className="work__button">{portfolioKr.button}
                    <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    );
}

export default WorksItems
