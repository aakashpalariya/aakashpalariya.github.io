import React from 'react'
import "./About.css"
import AboutImg from "../../assets/about.jpg";
import Info from './Info';

const About = () => {
    return (
        <section class="about section" id="about">
            <h2 class="section_title">About Me</h2>
            <span class="section_subtitle">My introduction</span>

            <div class="about_container container grid">
                <img src={AboutImg} alt="image" class="about_img" />

                <div class="about_data">
                    <Info />
                    <p class="about_description">
                        I have strong development skills and a passion for learning and design application as per requirement.
                    </p>
                    <p class="about_description">
                        Specialized in custom application development, experienced with many projects.
                    </p>
                    <p class="about_description">
                        Customer-oriented and structured method of working, focused on quality and maintainability. Highly motivated to work in a team, both comfortable in big companies as in small teams.
                    </p>
                    <div class="about_button">
                        <a download="" href="assets/pdf/Aakash Palariya.pdf" class="button button--flex">
                            Download CV <i class="uil uil-download-alt button_icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About