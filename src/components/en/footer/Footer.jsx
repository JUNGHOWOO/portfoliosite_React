import React from 'react';
import { footerEn } from '../../../assets/content_en';
import "./footer.css";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">{footerEn.title}</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#profile" className="footer__link">{footerEn.link1}</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">{footerEn.link2}</a>
                    </li>
                    <li>
                        <a href="#etc" className="footer__link">{footerEn.link3}</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.facebook.com/profile.php?id=100004434285176" className="footer__social-link" target="_blank">
                        <i class = "bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/wo_ow.jungho/" className="footer__social-link" target="_blank">
                        <i class = "bx bxl-instagram"></i>
                    </a>
                    <a href="https://github.com/JUNGHOWOO" className="footer__social-link" target="_blank">
                        <i class = "bx bxl-github"></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; {footerEn.copy}</span>
            </div>

        </footer>
    )
}

export default Footer