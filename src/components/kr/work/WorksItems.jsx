import React, { useState } from "react";
import { portfolioKr } from '../../../assets/content_kr';
import "../experience/experience.css";

const WorksItems = ({ item }) => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>

            <span href="#" className="work__button" onClick={() => toggleTab(1)}>{portfolioKr.button}
                <i className="uil uil-arrow-right experience__button-icon"></i></span>
            <div className={toggleState === 1 ? "experience__modal active-modal" : "experience__modal"}>
                <div className="experience__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times experience__modal-close"></i>
                    <h3 className="experience__modal-title">프로젝트 설명</h3>
                    <p className="experience__modal-description">프로젝트 자세한 설명</p>
                    <ul className="experience__modal-experience grid">
                        <table class="table" border={1}>
                            <th>
                                <tr>프로젝트 제목</tr>
                                <tr>프로젝트 내용</tr>
                                <tr>개발 환경</tr>
                                <tr>개발 언어</tr>
                                <tr>작업 인원</tr>
                                <tr>비고</tr>
                                <tr>파일</tr>
                            </th>
                            <th>
                                <tr>1</tr>
                                <tr>1</tr>
                                <tr>1</tr>
                                <tr>1</tr>
                                <tr>1</tr>
                                <tr>1</tr>
                                <tr><input id='filename' type="button" onclick="javascript:location.href=''" value="다운로드"></input></tr>
                            </th>
                        </table>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WorksItems
