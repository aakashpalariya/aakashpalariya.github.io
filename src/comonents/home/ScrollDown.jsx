import React from 'react'

const ScrollDown = () => {
    return (
        <div className="home_scroll">
            <a href="#about" className="home_scroll-button">
                <div class="home_scroll">
                    <a href="#about" class="home_srcoll-button button--flex">
                        <i class="uil uil-mouse-alt home_scroll-mouse"></i>
                        <span class="home_scroll-name">Scroll down</span>
                        <i class="uil uil-arrow-down home-scroll-arrow"></i>
                    </a>
                </div>
            </a>
        </div>
    )
}

export default ScrollDown