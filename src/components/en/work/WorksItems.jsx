import React, { useState } from "react";
import { portfolioEn } from '../../../assets/content_en';

const WorksItems = ({ item }) => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>

            <span className="work__button" onClick={() => toggleTab(1)}>{portfolioEn.button}
                <i className="uil uil-arrow-right work__button-icon"></i></span>
            <div className={toggleState === 1 ? "work__modal active-modal" : "work__modal"}>
                <div className="work__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>
                    <ul className="work__modal-work grid">
                        <table class="table" border="1" bordercolor="gray">
                            <tr>
                                <td width="100">{item.project}</td>
                                <td align="left">{item.projectname}</td>
                            </tr>
                            <tr>
                                <td width="100">{item.summarytitle}</td>
                                <td align="left">{item.summary}</td>
                            </tr>
                            <tr>
                                <td width="100">{item.content}</td>
                                <td align="left">{item.majorcontent}</td>
                            </tr>
                            <tr>
                                <td width="100">{item.per}</td>
                                <td align="left">{item.person}</td>
                            </tr>
                            <tr>
                                <td width="100">{item.time}</td>
                                <td align="left">{item.usetime}</td>
                            </tr>
                            <tr>
                                <td width="100">{item.env}</td>
                                <td align="left">{item.environment}</td>
                            </tr>
                            <tr>
                                <td width="100">{item.lang}</td>
                                <td align="left">{item.language}</td>
                            </tr>
                        </table>
                        <a download="" href={item.file} className="button project_button"><span>
                            {item.button}&nbsp;&nbsp;<i class="bx bxs-note bx-flip-horizontal bx-tada"></i>
                        </span>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WorksItems
