import React, {useEffect, useState} from 'react';
// Sass
import "./StickyButton.scss";
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons';

const StickyButton = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (

        <div className={`sticky ${isClicked ? 'clicked' : ''} ${isVisible ? 'show' : ''}`} onClick={handleClick}>
            <div className="sticky__cta">
                <button className="sticky__cta--btn">{isClicked ? 'CLOSE' : 'CONTACT'}</button>
            </div>
            <div className="sticky__items" id="stickyOptions">
                <div className="sticky__item">
                    <a href="tel:+48 505 160 622" className="sticky__link phone">
                        <FontAwesomeIcon icon={faSquarePhone}/>
                    </a>
                </div>
                <div className="sticky__item">
                    <a href="mailto:atesenergygroup@gmail.com" className="sticky__link mail">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StickyButton;
