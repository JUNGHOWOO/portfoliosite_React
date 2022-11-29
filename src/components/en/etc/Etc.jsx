import React from 'react';
import "./etc.css";
import { Data } from './Data';
import { contactEn } from '../../../assets/content_en';

/* import swiper */
import { Swiper, SwiperSlide } from "swiper/react";
/* import swiper styles */
import "swiper/css";
import "swiper/css/pagination";

/* import required module */
import { Pagination } from "swiper";

const Etc = () => {
    
    return (
        <section className="etc container section" id="etc">
            <h2 className="section__title">Etc</h2>
            <span className="section__subtitle">abcd</span>

            <Swiper className="etc__container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween:48,
                },
            }}
            modules={[ Pagination ]}
            >
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className='etc__card' key={ id }>
                            <img src={ image } alt="" className='etc__img' />
                            <h3 className="etc__name">{ title }</h3>
                            <p className="etcs__description">{ description }</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Etc