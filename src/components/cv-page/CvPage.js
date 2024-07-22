import React from 'react';
// Sass
import "./CvPage.scss";
// Title
import Title from "../parts/Title";
// Icons
import Icons from "../parts/Icons";
// Image
import profilePicture from '../../images/ML_image.webp';

const CvPage = () => {
    return (
        <div className="cv-page">
            <div className="container-s p-1">
                <Title title=".webCV" subtitle="A little bit about me" sectionId="/cv-zone" className="secondary" direction="left"/>
                <div className="cv-page__content">
                    <div className="personal">
                        <div className="personal__thumbnail">
                            <img src={profilePicture} alt="Profile" className="profile-picture"/>
                        </div>
                        <div className="personal__info">
                            <div className="personal__info--item">
                                <h3 className="personal__header name header-m">#Michał Łukaszewicz</h3>
                            </div>
                            <div className="personal__info--item">
                                <label className="header-m">date of birth:</label>
                                <h3 className="personal__header header-m">04/03/1989</h3>
                            </div>
                            <div className="personal__info--item">
                                <label className="header-m">e-mail:</label>
                                <a href="mailto:michal.lukaszewicz.dev@gmail.com" className="perosnal__link header-m">michal.lukaszewicz.dev@gmail.com</a>
                            </div>
                            <div className="personal__info--item">
                                <label className="header-m">phone:</label>
                                <a href="tel:73154095" className="perosnal__link header-m">73154095</a>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <p className="description__text text">My adventure with designing and creating websites began a few years ago, when I started as a freelancer writing code and creating simple websites.</p>
                        <p className="description__text text">Currently, as an freelancer, I cooperate with programmers and graphic designers on various projects, developing my skills in increasingly advanced technologies.</p>
                        <p className="description__text text">I specialize in creating and modifying websites based on WordPress. I have experience in writing my own themes and adapting existing templates to the specific needs of clients. Optimization and integration with various plugins and API's.</p>
                        <p className="description__text text">I create dynamic, responsive websites using PHP and expand my knowledge of React.js by learning to build modern front-end applications that provide an interactive and smooth user experience.</p>
                        <p className="description__text text">Apart from programming, music is an integral part of my life. I play drums and my favorite music genres are funk, jazz and salsa. Music gives me not only joy, but also inspiration for creative thinking and approach to work.</p>
                    </div>
                    <div className="experience">
                        <div className="cv-title">
                            <h3 className="cv-title__header header-m">#Experience</h3>
                        </div>
                        <p className="experience__text text"><span className="bolded">2023 /</span>Cooperation with I AM FOR DEVELOPER Marketing Agency / Freelancer</p>
                        <p className="experience__text text"><span className="bolded">2022 / </span>Coordinator of the Complaint Department / Green Cell</p>
                        <p className="experience__text text"><span className="bolded">2018 / 2023 / </span>Frontend Developer / Freelancer</p>
                        <p className="experience__text text"><span className="bolded">2018 / 2021 / </span>RMA Specialist / Green Cell</p>
                        <p className="experience__text text"><span className="bolded">2020 / 2021 / </span>Cooperation with Freshcodeee / Startup</p>
                        <p className="experience__text text"><span className="bolded">2018 / </span>Programming Course / Academy 108 Cracow</p>
                        <p className="experience__text text"><span className="bolded">2015 / 2018 / </span>Owner Of The Musical Activity / Drums Art</p>
                        <p className="experience__text text"><span className="bolded">2014 / 2016 / </span>Cooperation with the "Perfect Music Show" Music Agency / Drums</p>
                        <p className="cta__text text">Go to my portfolio and see work experience</p>
                        <p className="text">and the projects I have completed:</p>
                        <a href="/" className="cta__link">www.michallukaszewicz.dev</a>
                    </div>
                    <div className="technologies">
                        <div className="cv-title" >
                            <h3 className="cv-title__header header-m">#Skills</h3>
                        </div>
                        <Icons />
                    </div>
                    <div className="stack">
                        <div className="wp-stack">
                            <div className="cv-title">
                                <h3 className="cv-title__header header-m">#Wordpress Developer</h3>
                            </div>
                            <p className="stack__text text">PHP (custom functions, wordpress core)</p>
                            <p className="stack__text text">jQuery (intermediate)</p>
                            <p className="stack__text text">ACF (content management)</p>
                            <p className="stack__text text">Woocommerce (beginner)</p>
                            <p className="stack__text text">Plugins (creating and editing)</p>
                            <p className="stack__text text">Templates (creating and editing)</p>
                            <p className="stack__text text">Domain Support (project and data migration)</p>
                        </div>
                        <div className="front-stack">
                            <div className="cv-title">
                            <h3 className="cv-title__header header-m">#Front-End Developer</h3>
                            </div>
                            <p className="stack__text text">JavaScript (intermediate)</p>
                            <p className="stack__text text">React (beginner)</p>
                            <p className="stack__text text">HTML5 (advanced)</p>
                            <p className="stack__text text">CSS3 (advanced)</p>
                            <p className="stack__text text">SASS (style management)</p>
                            <p className="stack__text text">Git (intermediate)</p>
                            <p className="stack__text text">PhpStorm (IDE)</p>
                        </div>
                    </div>
                    <div className="agreement">
                        <p className="agreement__text text">I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CvPage;