import React, { useState, useEffect } from "react";
import "./Header.css";
import ThemeToggle from "../_helpers/themeToggle/ThemeToggle";
// import ThemeButton from "./ThemeButton";

const Header = () => {
    // Toggle Menu
    const [Toggle, showMenu] = useState(false);

    const [activeLink, setActiveLink] = useState('#home');

    const handleClick = (href) => {
        setActiveLink(href);
    };

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav_logo">Aakash Palariya</a>
                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
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
                    <i className="uil uil-times nav_close" id="nav-close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav_btns">
                    <ThemeToggle />
                    <div className="nav_toggle" id="nav-toggle" onClick={() => showMenu(!Toggle)}>
                        <i className="uil uil-apps"></i>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header