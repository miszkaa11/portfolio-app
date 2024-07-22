import React, { useState } from 'react';
// Sass
import './Contact.scss';
// Title
import Title from '../parts/Title';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMessage } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [showConsent, setShowConsent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(data);
        // Data Logic here
    };

    const toggleConsent = () => {
        setShowConsent(!showConsent);
    };

    return (
        <section id="contact" className="contact">
            <div className="container-m p-1">
                <Title title=".contact" subtitle="Find me and ask on social media" sectionId="footer" className="primary" direction="down"/>
                <div className="contact__content">
                    <div className="contact__inner">
                        <div className="contact__info">
                            <FontAwesomeIcon icon={faMessage} size="2x" />
                            <h3 className="contact__header header-m">If you would like to contact me, please use the contact form</h3>
                        </div>
                        <div className="contact__info">
                            <FontAwesomeIcon icon={faMessage} size="2x" />
                            <h3 className="contact__header header-m">Or directly my social media account</h3>
                        </div>
                    </div>
                    <div className="contact__inner">
                        <form onSubmit={handleSubmit}>
                            <label><input type="text" id="name" name="name" placeholder="Name" required/></label>
                            <label><input type="text" id="phone" name="phone" placeholder="Phone"/></label>
                            <label><input type="email" id="email" name="email" placeholder="E-mail" required/></label>
                            <label><textarea id="message" name="message" rows="4" placeholder="Message"
                                             required></textarea></label>
                            <label className="checkbox">
                                <input type="checkbox"/>
                                <span className="label"></span>
                                I agree to the processing of personal data
                            </label>
                            <button onClick={toggleConsent} className="consent__btn">
                                {showConsent ? 'Close Consent' : 'Show Consent'}
                            </button>
                            <div className={`consent ${showConsent ? 'show' : ''}`}>
                                <p className="consent__text">Pursuant to Article 12(1) of the Regulation (EU)
                                    2016/679 of the European Parliament and of the Council of 27 April 2016 on the
                                    protection of natural persons with regard to the processing of personal data and
                                    on the free movement of such data and repealing Directive 95/46/EC (hereinafter
                                    "RODO"), Michał Łukaszewicz, 10/17 Biskupa Albina Małysiaka Street, 30-389
                                    Kraków (hereinafter "Michał Łukaszewicz Portfolio"), presents basic information
                                    regarding the processing of your personal data.</p>
                            </div>
                            <div className="cta">
                                <button type="submit" className="secondary btn">
                                    GET IN TOUCH
                                    <FontAwesomeIcon icon={faPaperPlane}/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
