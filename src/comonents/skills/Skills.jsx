import React from 'react'
import Ends from './Ends'
import "./Skills.css";

const Skills = () => {
  return (
    <section class="skills section" id="skills">
            <h2 class="section_title">Skills</h2>
            <span class="section_subtitle">My technical skills</span>
            <div class="skills_container container grid">
              <Ends/>
              <Ends/>
            </div>
        </section>

  )
}

export default Skills