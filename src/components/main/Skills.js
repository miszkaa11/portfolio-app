import React from 'react';
// Scss
import '../parts/Icons.scss';
// Title
import Title from '../parts/Title';
// Icons
import Icons from "../parts/Icons";

const Skills = () => {
    return (
        <section id="skills" className="icons">
            <div className="container-m p-1">
                <Title title=".mySkills" subtitle="Tools and technologies" sectionId="cv" className="primary" direction="down" />
                <Icons />
            </div>
        </section>
    );
}

export default Skills;