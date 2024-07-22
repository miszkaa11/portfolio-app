import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// Sass
import './Nav.scss';
// Logo
import ML_logo from '../../images/ML_logo.webp';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = window.scrollY;
            const elements = document.querySelectorAll(".site-navigation");

            elements.forEach((element) => {
                if (scrollHeight > elements[0].offsetHeight) {
                    element.classList.add('scrolled');
                } else {
                    element.classList.remove('scrolled');
                }
            });
        };

        document.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (event, id) => {
        event.preventDefault();
        setIsOpen(false);
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                const offset = element.offsetTop - 185;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    const handleNewsClick = (event) => {
        event.preventDefault();
        setIsOpen(false);
        navigate('/news');
    };

    return (
        <div className="site-navigation">
            <div className="container-m p-1">
                <div className="site-menu" ref={menuRef}>
                    <div className="site-branding">
                        <a href="/" className="d-flex">
                            <img src={ML_logo} className="site-logo" alt="Logo"/>
                        </a>
                    </div>
                    <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span className="burger__line"></span>
                        <span className="burger__line"></span>
                        <span className="burger__line"></span>
                    </div>
                    <div className={`active ${isOpen ? 'open' : ''}`}>
                        <ul className="menu__items">
                            <li className="menu__item">
                                <a href="#about" className="menu__link" onClick={(e) => handleClick(e, 'about')}>aboutMe</a>
                            </li>
                            <li className="menu__item">
                                <a href="#gallery" className="menu__link" onClick={(e) => handleClick(e, 'gallery')}>work&Projects</a>
                            </li>
                            <li className="menu__item">
                                <a href="#skills" className="menu__link" onClick={(e) => handleClick(e, 'skills')}>mySkills</a>
                            </li>
                            <li className="menu__item">
                                <a href="#cv" className="menu__link" onClick={(e) => handleClick(e, 'cv')}>cvZone</a>
                            </li>
                            <li className="menu__item">
                                <a href="/news" className="menu__link" onClick={handleNewsClick}>news</a>
                            </li>
                            <li className="menu__item">
                                <a href="#contact" className="menu__link" onClick={(e) => handleClick(e, 'contact')}>contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
