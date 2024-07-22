import React from 'react';
// Scss
import './About.scss';
// Title
import Title from '../parts/Title';
// Image
import ML_image from '../../images/ML_image.webp';

const About = () => {
    return (
        <section id="about" className="about info">
            <div className="container-m p-1">
                <Title title=".aboutMe" subtitle="Some informations about me" sectionId="gallery" className="primary" direction="down"/>
                <div className="info__content">
                    <div className="info__inner">
                        <img src={ML_image} className="info__image" alt="Michał Łukaszewicz"/>
                    </div>
                    <div className="info__inner">
                        <h3 className="info__header header-m">Hi!</h3>
                        <p className="info__text text">My adventure with designing and creating websites began a few years ago, when I started as a freelancer writing code and creating simple websites.</p>
                        <p className="info__text text">Currently, as an freelancer, I cooperate with programmers and graphic designers on various projects, developing my skills in increasingly advanced technologies.</p>
                        <p className="info__text text">I specialize in creating and modifying websites based on WordPress. I have experience in writing my own themes and adapting existing templates to the specific needs of clients. Optimization and integration with various plugins and API's.</p>
                        <p className="info__text text">I create dynamic, responsive websites using PHP and expand my knowledge of React.js by learning to build modern front-end applications that provide an interactive and smooth user experience.</p>
                        <p className="info__text text">
                            Apart from programming, music is an integral part of my life. I play drums and my favorite music genres are funk, jazz and salsa. Music gives me not only joy, but also inspiration for creative thinking and approach to work.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;