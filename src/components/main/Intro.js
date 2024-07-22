import React from 'react';
// Scss
import './Intro.scss';
// Arrow
import Arrow from '../parts/Arrow';

const Intro = () => {
    return (
        <section id="intro" className="intro">
            <div className="container-m">
                <div className="intro__content">
                    <div className="intro__inner">
                        <h1 className="intro__header header-xl">Hello!</h1>
                        <h1 className="intro__header header-xl">I'm Michał</h1>
                        <h1 className="intro__header header-xl">Web Developer</h1>
                        <Arrow id="about" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;
