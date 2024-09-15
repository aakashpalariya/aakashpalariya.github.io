import React, { useState, useEffect } from 'react';
import './ScrollUp.css'; // Make sure to create this CSS file for styling

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 560) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a 
            href="#"
            className={`scrollup ${isVisible ? 'show-scroll' : ''}`}
            onClick={(e) => {
                e.preventDefault();
                scrollToTop();
            }}
        >
            <i className="uil uil-arrow-up scrollup_icon"></i>
        </a>
    );
};

export default ScrollUp;
