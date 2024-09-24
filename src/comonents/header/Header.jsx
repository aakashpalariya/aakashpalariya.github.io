import React, { useState, useEffect } from "react";
import "./Header.css";
import ThemeToggle from "../_helpers/themeToggle/ThemeToggle";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    const handleClick = (href) => {
        setActiveLink(href);
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Change this value as needed
        };

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(`#${entry.target.id}`);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        // Select all sections with IDs matching the nav links
        const sectionIds = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];
        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav_logo">Aakash Palariya</a>
                <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home"
                                className={`nav_link ${activeLink === '#home' ? 'active-link' : ''}`}
                                onClick={() => handleClick('#home')}>
                                <i className="uil uil-estate nav_icon"></i> Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about"
                                className={`nav_link ${activeLink === '#about' ? 'active-link' : ''}`}
                                onClick={() => handleClick('#about')}>
                                <i className="uil uil-user nav_icon"></i> About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills"
                                className={`nav_link ${activeLink === '#skills' ? 'active-link' : ''}`}
                                onClick={() => handleClick('#skills')}>
                                <i className="uil uil-file-alt nav_icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#services"
                                className={`nav_link ${activeLink === '#services' ? 'active-link' : ''}`}
                                onClick={() => handleClick('#services')}>
                                <i className="uil uil-briefcase-alt nav_icon"></i> Services
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#portfolio"
                                className={`nav_link ${activeLink === '#portfolio' ? 'active-link' : ''}`}
                                onClick={() => handleClick('#portfolio')}>
                                <i className="uil uil-scenery nav_icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact"
                                className={`nav_link ${activeLink === '#contact' ? 'active-link' : ''}`}
                                onClick={() => handleClick('#contact')}>
                                <i className="uil uil-message nav_icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav_close" id="nav-close" onClick={() => setToggle(!toggle)}></i>
                </div>
                <div className="nav_btns">
                    <ThemeToggle />
                    <div className="nav_toggle" id="nav-toggle" onClick={() => setToggle(!toggle)}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header