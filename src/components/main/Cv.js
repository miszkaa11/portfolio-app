import { Link } from 'react-router-dom';
// Scss
import './Cv.scss';
// Title
import Title from '../parts/Title';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown, faFileCode } from '@fortawesome/free-solid-svg-icons';


const pdfFile = '/download/Michal_Lukaszewicz_CV.pdf';

const Cv = () => {
    return (
        <section id="cv" className="cv">
            <div className="container-m">
                <Title title=".cvZone" subtitle="Commercial experience" sectionId="contact" className="primary" direction="down" />
                <div className="cv__content">
                    <div className="cv__inner">
                        <a href={pdfFile} rel="noopener noreferrer" target="_blank" className="cv__link" download="Michal_Lukaszewicz_CV.pdf">
                            <FontAwesomeIcon icon={faFileArrowDown}/>
                            <p className="cv__text text">Download</p>
                        </a>
                    </div>
                    <div className="cv__inner">
                        <Link to="/cv-page" className="cv__link">
                            <FontAwesomeIcon icon={faFileCode}/>
                            <p className="cv__text text">Web Cv</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cv;




