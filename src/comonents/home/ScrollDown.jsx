import React from 'react'

const ScrollDown = () => {
    return (
        <div className="home_scroll">
            <a href="#about" className="home_srcoll-button button--flex">
                <i className="uil uil-mouse-alt home_scroll-mouse"></i>
                <span className="home_scroll-name">Scroll down</span>
                <i className="uil uil-arrow-down home-scroll-arrow"></i>
            </a>
        </div>
    )
}

export default ScrollDown