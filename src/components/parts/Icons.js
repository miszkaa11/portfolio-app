import React from "react";
// Sass
import "./Icons.scss";
// FontAwesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHtml5, faReact, faSass, faSquareGit, faSquareJs, faWordpress} from "@fortawesome/free-brands-svg-icons";

const iconData = [
    { icon: faSquareJs, className: 'js' },
    { icon: faReact, className: 'react' },
    { icon: faHtml5, className: 'html' },
    { icon: faSass, className: 'sass' },
    { icon: faWordpress, className: 'wp' },
    { icon: faSquareGit, className: 'git' },
];

const Icons = () => {
    return (
        <div className="icons__items">
            {iconData.map((iconItem, index) => (
                <div key={index} className="icons__item">
                    <FontAwesomeIcon icon={iconItem.icon} className={iconItem.className} />
                </div>
            ))}
        </div>
    );
}

export default Icons;