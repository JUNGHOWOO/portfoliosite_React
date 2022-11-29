import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import { contactEn } from '../../../assets/content_en';

const Contact = () => {
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm(
                'service_exduyci', 
                'template_bea5yjy', 
                form.current, 
                'yzLwX_AtMiYUszf4a'
            )

            e.target.reset();
        };

    return (
        <section className="contact section" id='contact'>
            <h2 className="section__title">{contactEn.title}</h2>
            <span className="section__subtitle">{contactEn.subtitle}</span>

            <div className="contact__container container grid">

                <div className="contact__content">
                    <h3 className="contact__title">{contactEn._title1}</h3>
                    <div className="contact__info">

                        <div className="contact__card">
                            <i className="uil uil-envelope contact__card-icon"></i>
                            <h3 className="contact__card-title">{contactEn.title1}</h3>
                            <span className="contact__card-data">{contactEn.data1}</span>
                            <a href="mailto:examplemail@gmail.com.com" className="contact__button">{contactEn.button1}{""}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="uil uil-forwaded-call contact__card-icon"></i>
                            <h3 className="contact__card-title">{contactEn.title2}</h3>
                            <span className="contact__card-data">{contactEn.data2}</span>
                            <a href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!" className="contact__button">{contactEn.button1}{""}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="uil uil-comments contact__card-icon"></i>
                            <h3 className="contact__card-title">{contactEn.title3}</h3>
                            <span className="contact__card-data">{contactEn.data3}</span>
                            <a href="https://m.me/crypticalcoder" className="contact__button">{contactEn.button1}{""}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">{contactEn._title2}</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">{contactEn.tag1}</label>
                            <input 
                                type="text" 
                                name="name" 
                                className='contact__form-input' 
                                placeholder={contactEn.place1}
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">{contactEn.tag2}</label>
                            <input 
                                type="email" 
                                name="email" 
                                className='contact__form-input' 
                                placeholder={contactEn.place2}
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">{contactEn.tag3}</label>
                            <textarea 
                                name="project" 
                                cols="30" 
                                rows="10" 
                                className='contact__form-input' 
                                placeholder={contactEn.place3}
                            ></textarea>
                        </div>

                        <button className="button button--flex">
                            {contactEn.button2}
                            <svg class="button__icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="#fff" d="M21.15,2.86a2.89,2.89,0,0,0-3-.71L4,6.88a2.9,2.9,0,0,0-.12,5.47l5.24,2h0a.93.93,0,0,1,.53.52l2,5.25A2.87,2.87,0,0,0,14.36,22h.07a2.88,2.88,0,0,0,2.69-2L21.85,5.83A2.89,2.89,0,0,0,21.15,2.86ZM20,5.2,15.22,19.38a.88.88,0,0,1-.84.62.92.92,0,0,1-.87-.58l-2-5.25a2.91,2.91,0,0,0-1.67-1.68l-5.25-2A.9.9,0,0,1,4,9.62a.88.88,0,0,1,.62-.84L18.8,4.05A.91.91,0,0,1,20,5.2Z"></path>
                </svg>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact