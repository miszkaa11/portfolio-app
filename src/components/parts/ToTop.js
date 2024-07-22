import React, { useState, useEffect } from 'react';
// Sass
import "./ToTop.scss";
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [inFooter, setInFooter] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        const checkIfInFooter = () => {
            const footerSection = document.getElementById('footer');
            if (footerSection) {
                const footerPosition = footerSection.getBoundingClientRect();
                if (footerPosition.top <= window.innerHeight && footerPosition.bottom >= 0) {
                    setInFooter(true);
                } else {
                    setInFooter(false);
                }
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('scroll', checkIfInFooter);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('scroll', checkIfInFooter);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`to-top ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
            <button className={`to-top__btn ${inFooter ? 'in-footer' : ''}`}>
                <FontAwesomeIcon icon={faArrowUp} size="2x"/>
            </button>
        </div>
    );
};

export default ToTop;
