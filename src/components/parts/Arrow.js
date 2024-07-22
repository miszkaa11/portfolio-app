import React from 'react';
import PropTypes from 'prop-types';
// Sass
import './Arrow.scss';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Arrow = ({ id, direction }) => {
    const handleClick = (event) => {
        event.preventDefault();

        if (direction === 'down') {
            const element = document.getElementById(id);
            if (element) {
                const offset = element.offsetTop - 185;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        } else if (direction === 'left') {
            window.history.back();
        }
    };

    const icon = direction === 'left' ? faArrowLeft : faArrowDown;

    return (
        <div className="arrow">
            <a href={`#${id}`} className="arrow__btn" onClick={handleClick}><FontAwesomeIcon icon={icon} /></a>
        </div>
    );
};

Arrow.propTypes = {
    id: PropTypes.string.isRequired,
    direction: PropTypes.oneOf(['down', 'left']),
};

Arrow.defaultProps = {
    direction: 'down',
};

export default Arrow;
