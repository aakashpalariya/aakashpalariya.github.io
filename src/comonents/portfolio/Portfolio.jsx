import React from 'react'
import PortfolioImg1 from "../../assets/portfolio1.jpg";
import PortfolioImg2 from "../../assets/portfolio2.jpg";
import PortfolioImg3 from "../../assets/portfolio3.jpg";
import "./Portfolio.css";


// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section_title">Portfolio</h2>
            <span className="section_subtitle">Most recent work</span>
            <div className="port_container container swiper-container" >
                <div className="swiper-wrapper">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination]}
                        loop={true} cssMode={true}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}>

                        <SwiperSlide>
                            <div className="port_content grid swiper-slide">
                                <img src={PortfolioImg2} alt="image" className="port_img" />

                                <div className="port_data">
                                    <h3 className="port_title">Brand Design</h3>
                                    <p className="port_description">Website adaptable to all devices, with ui components and
                                        animated interactions.</p>

                                    <a href="#" className="button button--flex button--small port_button">
                                        Demo
                                        <i className="uil uil-arrow-right button_icon"></i>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="port_content grid swiper-slide">
                                <img src={PortfolioImg3} alt="image" className="port_img" />

                                <div className="port_data">
                                    <h3 className="port_title">Brand Design</h3>
                                    <p className="port_description">Website adaptable to all devices, with ui components and
                                        animated interactions.</p>

                                    <a href="#" className="button button--flex button--small port_button">
                                        Demo
                                        <i className="uil uil-arrow-right button_icon"></i>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="port_content grid swiper-slide">
                                <img src={PortfolioImg1} alt="image" className="port_img" />

                                <div className="port_data">
                                    <h3 className="port_title">Brand Design</h3>
                                    <p className="port_description">Website adaptable to all devices, with ui components and
                                        animated interactions.</p>

                                    <a href="#" className="button button--flex button--small port_button">
                                        Demo
                                        <i className="uil uil-arrow-right button_icon"></i>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default Portfolio