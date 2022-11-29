import React from "react";
import { skillEn } from "../../../assets/content_en";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">{skillEn.Fr_title}</h3>
            
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bxs-extension bx-flip-horizontal"></i>
                        <div>
                            <h3 className="skills__name">{skillEn.Fr_name1}</h3>
                            <span className="skills__level">{skillEn.Fr_level1}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxs-extension bx-flip-horizontal"></i>
                        <div>
                            <h3 className="skills__name">{skillEn.Fr_name2}</h3>
                            <span className="skills__level">{skillEn.Fr_level2}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxs-extension bx-flip-horizontal"></i>
                        <div>
                            <h3 className="skills__name">{skillEn.Fr_name3}</h3>
                            <span className="skills__level">{skillEn.Fr_level3}</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bxs-extension bx-flip-horizontal"></i>
                        <div>
                            <h3 className="skills__name">{skillEn.Fr_name4}</h3>
                            <span className="skills__level">{skillEn.Fr_level4}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxs-extension bx-flip-horizontal"></i>
                        <div>
                            <h3 className="skills__name">{skillEn.Fr_name5}</h3>
                            <span className="skills__level">{skillEn.Fr_level5}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxs-extension bx-flip-horizontal"></i>
                        <div>
                            <h3 className="skills__name">{skillEn.Fr_name6}</h3>
                            <span className="skills__level">{skillEn.Fr_level6}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend