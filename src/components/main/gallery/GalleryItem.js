import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
// Scss
import "./GalleryItem.scss";
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faCode } from '@fortawesome/free-solid-svg-icons';
import { faWordpress, faReact } from "@fortawesome/free-brands-svg-icons";
// Spring
import { useSpring, animated } from 'react-spring';

const iconMapping = {
    wordpress: faWordpress,
    react: faReact,
    html: faCode,
};

const GalleryItem = ({ item }) => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Użyj triggerOnce, aby animacja uruchomiła się tylko raz
        threshold: 0.5, // Domyślnie, kiedy 50% elementu jest widoczne
    });

    const animationProps = useSpring({
        opacity: inView ? 1 : 0,
        from: { opacity: 0 },
        config: { duration: 300 }, // opcjonalna konfiguracja animacji
    });

    const trimmedDescription = (description) => {
        const maxLength = 175;
        if (description.length > maxLength) {
            let trimmed = description.substring(0, maxLength);
            let lastSpaceIndex = trimmed.lastIndexOf(' ');
            if (lastSpaceIndex > 0) {
                trimmed = trimmed.substring(0, lastSpaceIndex);
            }
            return trimmed + "...";
        }
        return description;
    };


    return (
        <animated.div className="gallery__item" ref={ref} style={animationProps}>
            <div className="gallery__item--thumbnail">
                <Link to={`/detail/${item.id}`} className="link">
                    <img src={item.thumbnail} className="gallery__image" alt={item.title} />
                </Link>
                <Link to={`/detail/${item.id}`} className="mobile primary btn">
                    SEE MORE
                    <FontAwesomeIcon icon={faFolderOpen} />
                </Link>
            </div>
            <div className="gallery__item--description">
                <div className="gallery__stack">
                    <FontAwesomeIcon icon={iconMapping[item.technology]} />
                </div>
                <h3 className="gallery__header header-m">{item.title}</h3>
                <p className="gallery__text text">
                    {trimmedDescription(item.description)}
                </p>
                <Link to={`/detail/${item.id}`} className="desktop primary btn">
                    SEE MORE
                    <FontAwesomeIcon icon={faFolderOpen} />
                </Link>
            </div>
        </animated.div>
    );
};

export default GalleryItem;
