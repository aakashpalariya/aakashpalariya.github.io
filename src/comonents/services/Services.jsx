import React, { useState } from 'react'
import "./Services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (i) => {
        setToggleState(i)
    }
    return (
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">What I completed</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">Ui/Ux <br /> Designer</h3>
                    </div>

                    <span className="button button--flex button--small button--link services_button" onClick={() => toggleTab(1)}>
                        View more
                        <i className="uil uil-arrow-right button_icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">Ui/Ux <br /> Designer</h4>
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                            <p className="services_modal-description">
                                Services with more then 3 years of experiece. Providing quility work and clents and companies.
                            </p>
                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I develope the user interface</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Web page delelopement</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I develope the user interface</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I develope the user development</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">Front end <br /> Developement</h3>
                    </div>

                    <span className="button button--flex button--small button--link services_button" onClick={() => toggleTab(1)}>
                        View more
                        <i className="uil uil-arrow-right button_icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">Ui/Ux <br /> Designer</h4>
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                            <p className="services_modal-description">
                                Services with more then 3 years of experiece. Providing quility work and clents and companies.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develope the user interface</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>Web page delelopement</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develope the user interface</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develope the user development</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-pen services_icon"></i>
                        <h3 className="services_title">Brand <br /> Designer</h3>
                    </div>

                    <span className="button button--flex button--small button--link services_button" onClick={() => toggleTab(1)}>
                        View more
                        <i className="uil uil-arrow-right button_icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">Ui/Ux <br /> Designer</h4>
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                            <p className="services_modal-description">
                                Services with more then 3 years of experiece. Providing quility work and clents and companies.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develope the user interface</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>Web page delelopement</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develope the user interface</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
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