import React from 'react'
import Ends from './Ends'
import "./Skills.css";
import Sets from './Sets';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical skills</span>
      <div className="skills_container container grid">
        <Sets />
      </div>
    </section>

  )
}

export default Skills