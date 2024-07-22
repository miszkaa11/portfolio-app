import React from "react";
import {Link} from "react-router-dom";
// Moment
import moment from 'moment';
// Sass
import "./Footer.scss";
// FontAwesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    const currentYear = moment().format('YYYY');

    return (
        <div id="footer" className="footer">
            <div className="container-m">
                <div className="icons__items">
                    <div className="icons__item">
                        <a href="mailto:michal.lukaszewicz.dev@gmail.com">
                            <FontAwesomeIcon icon={faGoogle} size="3x" className="google" />
                        </a>
                    </div>
                    <div className="icons__item">
                        <a href="https://www.linkedin.com/in/micha%C5%82-%C5%82ukaszewicz-970634160/">
                            <FontAwesomeIcon icon={faLinkedin} size="3x" className="linkedin" />
                        </a>
                    </div>
                    <div className="icons__item">
                        <a href="https://github.com/miszkaa11?tab=repositories">
                            <FontAwesomeIcon icon={faGithub} size="3x" className="github" />
                        </a>
                    </div>
                </div>
                <div className="footer__content">
                    <div className="privacy-policy-pilot">
                        <Link to="/privacy-policy">.privacy-policy</Link>
                    </div>
                    <span className="divider">|</span>
                    <div className="copyrights">
                        <p className="text">Copyrights &copy; {currentYear} Michał Łukaszewicz Dev</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;