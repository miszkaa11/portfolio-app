import React from 'react';
// Scss
import './Title.scss';
// Arrow
import Arrow from '../parts/Arrow';

const Title = ({ title, subtitle, sectionId, className, direction }) => {
    return (
        <div className={`title ${className}`}>
            <h2 className="title__header header-l">{title}</h2>
            <h3 className="title__header subtitle header-m">{subtitle}</h3>
            <Arrow id={sectionId} direction={direction}/>
        </div>
    );
}

export default Title;

