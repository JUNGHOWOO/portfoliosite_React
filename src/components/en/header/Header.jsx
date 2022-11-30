import React, { useState } from 'react';
import "./header.css";
import { navEn } from '../../../assets/content_en';

const Header = () => {
    /* change background header */
    window.addEventListener("scroll", function() {
        const header = this.document.querySelector(".header");
        /* when the scroll is higher than 2000 viewport height, add the show scroll-header to a tag withe the header tag  */
        if (this.scrollY >= 560) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })
    /* Toggle menu */
    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");
    return (
        <header className = "header">
            <nav className = "nav container">
                <a href="index.html" className="nav__logo">{navEn.logo}</a>

                <div className={ Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-home nav__icon"></i>{navEn.menu1}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#profile" onClick={() => setActiveNav("#profile")} className={activeNav === "#profile" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i> {navEn.menu2}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#timeline" onClick={() => setActiveNav("#timeline")} className={activeNav === "#timeline" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i> {navEn.menu3}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i> {navEn.menu4}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-briefcase nav__icon"></i> {navEn.menu5}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-briefcase nav__icon"></i> {navEn.menu6}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#etc" onClick={() => setActiveNav("#etc")} className={activeNav === "#etc" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i> {navEn.menu7}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i> {navEn.menu8}
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu
                    (!Toggle)}>
                    <i class='uil uil-apps'></i>
                </div>
            </nav>
        </header>
        
    )
}

export default Header