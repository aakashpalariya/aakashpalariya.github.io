import React from 'react'
import "./About.css"
import AboutImg from "../../assets/about.jpg";
import Info from './Info';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My introduction</span>

            <div className="about_container container grid">
                <img src={AboutImg} alt="image" className="about_img" />

                <div className="about_data">
                    <Info />
                    <p className="about_description">
                        I have strong development skills and a passion for learning and design application as per requirement.
                    </p>
                    <p className="about_description">
                        Specialized in custom application development, experienced with many projects.
                    </p>
                    <p className="about_description2">
                        Customer-oriented and structured method of working, focused on quality and maintainability. Highly motivated to work in a team, both comfortable in big companies as in small teams.
                    </p>
                    <div className="about_button">
                        <a download="" href="assets/pdf/Aakash Palariya.pdf" className="button button--flex">
                            Download CV <i className="uil uil-download-alt button_icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About