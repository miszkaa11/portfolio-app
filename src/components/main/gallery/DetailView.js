import React from 'react';
import { useParams } from 'react-router-dom';
// Sass
import "./DetailView.scss";
// Splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// Data
import items from './Data';
// Title
import Title from "../../parts/Title";

const DetailView = () => {
    const { id } = useParams();
    const item = items.find(item => item.id === id);

    if (!item) {
        return <div>Item not found</div>;
    }

    const splideOptions = {
        type: 'fade',
        perPage: 1,
        perMove: 1,
        pagination: false,
        gap: '1rem',
        autoplay: false,
    };

    return (
        <section id="detail-view" className="detail-view">
            <div className="container-s">
                <Title title={item.title} sectionId="/#gallery" className="secondary" direction="left" />
                <div className="detail-view__content">
                    <div className="detail-view__inner">
                        <div className="type client">
                            <h3 className="header-m">Client:</h3>
                            <p className="text">{item.client}</p>
                        </div>
                        <div className="type date">
                            <h3 className="header-m">Date:</h3>
                            <p className="text">{item.date}</p>
                        </div>
                        <div className="type task">
                            <h3 className="header-m">Task:</h3>
                            <p className="text">{item.task}</p>
                        </div>
                        <div className="type description">
                            <h3 className="header-m">Description:</h3>
                            <p className="text">{item.description}</p>
                        </div>
                    </div>
                    <div className="slider">
                        <Splide options={splideOptions}>
                            {item.images.map((image, index) => (
                                <SplideSlide key={index}>
                                    <img src={image} alt={`${item.title} ${index + 1}`}/>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailView;
