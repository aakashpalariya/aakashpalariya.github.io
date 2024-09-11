import React from 'react'
import "./Qual.css"

const Qual = () => {
    return (
        <section class="qualification section">
            <h2 class="section_title">Work</h2>
            <span class="section_subtitle">My experiences</span>

            <div class="qual_container container">
                {/* <div class="qual_tabs">
                    <div class="qual_button button--flex qual_active" 
                    data-target='#education'>
                        <i class="uil uil-graduation-cap qual_icon"></i>
                        Education
                    </div>
                    <div class="qual_button button--flex" data-target='#work'>
                        <i class="uil uil-briefcase-alt qual_icon"></i>
                        Work
                    </div>
                </div> */}
                <div class="qual_sections">

                    <div class="qual_content" data-content id="work">
                       
                        <div class="qual_data">
                            <div>
                                <div class="qual_titles">
                                    <h3 class="qual_title">Technical Consultant</h3>
                                    <span class="qual_subtitle">Ernst & Young</span>
                                </div>
                                <div class="qual_calendar">
                                    <i class="uil uil-calendar-alt"></i>
                                    Oct 2021 - Feb 2022
                                </div>
                            </div>

                            <div>
                                <span class="qual_rounder"></span>
                                <span class="qual_line"></span>
                            </div>
                        </div>

                        <div class="qual_data">
                            <div></div>

                            <div>
                                <span class="qual_rounder"></span>
                                <span class="qual_line"></span>
                            </div>
                            <div>
                                <div class="qual_titles">
                                    <h3 class="qual_title">Senior Software Engineer</h3>
                                    <span class="qual_subtitle">Chetu Inc</span>
                                </div>
                                <div class="qual_calendar">
                                    <i class="uil uil-calendar-alt"></i>
                                    Dec 2019 - Sep 2021
                                </div>
                            </div>

                        </div>

                        <div class="qual_data">
                            <div>
                                <div class="qual_titles">
                                    <h3 class="qual_title">Software Engineer</h3>
                                    <span class="qual_subtitle">Amaze Soft Solutions</span>
                                </div>
                                <div class="qual_calendar">
                                    <i class="uil uil-calendar-alt"></i>
                                    Oct 2017 - Nov 2019
                                </div>
                            </div>
                            <div>
                                <span class="qual_rounder"></span>
                                {/* <span class="qual_line"></span> */}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    )
}

export default Qual