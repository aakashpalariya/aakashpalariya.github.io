import React from 'react'

const Info = () => {
    return (
        <div class="about_info grid">
            <div className='about_box'>
            <i class="uil uil-award about_icon"></i>
                <span class="about_info-title">Experience</span>
                <span class="about_info-subtitle">6 Years </span>
            </div>
            <div className='about_box'>
            <i class="uil uil-briefcase-alt about_icon"></i>
                <span class="about_info-title">Completed</span>
                <span class="about_info-subtitle">20 project</span>
            </div>
            <div className='about_box'>
            <i class="uil uil-phone-volume about_icon"></i>
                <span class="about_info-title">Companies</span>
                <span class="about_info-subtitle">5 worked</span>
            </div>
        </div>
    )
}

export default Info