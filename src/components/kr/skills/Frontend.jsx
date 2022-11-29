import React from "react";
import { skillKr } from "../../../assets/content_kr";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">{skillKr.Fr_title}</h3>
            
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bxs-extension bx-flip-horizontal"></i>
                        <div>
                            <h3 className="skills__name">{skillKr.Fr_name1}</h3>
                            <span className="skills__level">{skillKr.Fr_level1}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxs-extension bx-flip-horizontal"></i>
                        <div>
                            <h3 className="skills__name">{skillKr.Fr_name2}</h3>
                            <span className="skills__level">{skillKr.Fr_level2}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxs-extension bx-flip-horizontal"></i>
                        <div>
                            <h3 className="skills__name">{skillKr.Fr_name3}</h3>
                            <span className="skills__level">{skillKr.Fr_level3}</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bxs-extension bx-flip-horizontal"></i>
                        <div>
                            <h3 className="skills__name">{skillKr.Fr_name4}</h3>
                            <span className="skills__level">{skillKr.Fr_level4}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxs-extension bx-flip-horizontal"></i>
                        <div>
                            <h3 className="skills__name">{skillKr.Fr_name5}</h3>
                            <span className="skills__level">{skillKr.Fr_level5}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxs-extension bx-flip-horizontal"></i>
                        <div>
                            <h3 className="skills__name">{skillKr.Fr_name6}</h3>
                            <span className="skills__level">{skillKr.Fr_level6}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend