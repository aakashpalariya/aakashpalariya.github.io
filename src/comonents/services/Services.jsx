import React, { useState } from 'react'
import "./Services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (i) => {
        setToggleState(i)
    }
    return (
        <section class="services section" id="services">
            <h2 class="section_title">Services</h2>
            <span class="section_subtitle">What I completed</span>

            <div class="services_container container grid">
                <div class="services_content">
                    <div>
                        <i class="uil uil-web-grid services_icon"></i>
                        <h3 class="services_title">Ui/Ux <br /> Designer</h3>
                    </div>

                    <span class="button button--flex button--small button--link services_button" onClick={() => toggleTab(1)}>
                        View more
                        <i class="uil uil-arrow-right button_icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div class="services_modal-content">
                            <h4 class="services_modal-title">Ui/Ux <br /> Designer</h4>
                            <i onClick={() => toggleTab(0)} class="uil uil-times services_modal-close"></i>
                            <p className="services_modal-description">
                                Services with more then 3 years of experiece. Providing quility work and clents and companies.
                            </p>
                            <ul class="services_modal-services grid">
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I develope the user interface</p>
                                </li>

                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Web page delelopement</p>
                                </li>

                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I develope the user interface</p>
                                </li>

                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I develope the user development</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div class="services_content">
                    <div>
                        <i class="uil uil-arrow services_icon"></i>
                        <h3 class="services_title">Front end <br /> Developement</h3>
                    </div>

                    <span class="button button--flex button--small button--link services_button" onClick={() => toggleTab(1)}>
                        View more
                        <i class="uil uil-arrow-right button_icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div class="services_modal-content">
                            <h4 class="services_modal-title">Ui/Ux <br /> Designer</h4>
                            <i onClick={() => toggleTab(0)} class="uil uil-times services_modal-close"></i>
                            <p className="services_modal-description">
                                Services with more then 3 years of experiece. Providing quility work and clents and companies.
                            </p>

                            <ul class="services_modal-services grid">
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develope the user interface</p>
                                </li>

                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>Web page delelopement</p>
                                </li>

                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develope the user interface</p>
                                </li>

                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develope the user development</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div class="services_content">
                    <div>
                        <i class="uil uil-pen services_icon"></i>
                        <h3 class="services_title">Brand <br /> Designer</h3>
                    </div>

                    <span class="button button--flex button--small button--link services_button" onClick={() => toggleTab(1)}>
                        View more
                        <i class="uil uil-arrow-right button_icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div class="services_modal-content">
                            <h4 class="services_modal-title">Ui/Ux <br /> Designer</h4>
                            <i onClick={() => toggleTab(0)} class="uil uil-times services_modal-close"></i>
                            <p className="services_modal-description">
                                Services with more then 3 years of experiece. Providing quility work and clents and companies.
                            </p>

                            <ul class="services_modal-services grid">
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develope the user interface</p>
                                </li>

                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>Web page delelopement</p>
                                </li>

                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develope the user interface</p>
                                </li>

                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develope the user development</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services