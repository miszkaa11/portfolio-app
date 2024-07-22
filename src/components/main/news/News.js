// src/components/news/News.js
import React from 'react';
import { Link } from 'react-router-dom';
// Sass
import "./News.scss";
// Data
import newsItems from './Data';
// Title
import Title from "../../parts/Title";
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const News = () => {
    return (
        <div className="news">
            <Title title=".news" subtitle="Stay updated" className="secondary" direction="left"/>
            <div className="container-s">
                <div className="news__content">
                    {newsItems.map(item => (
                        <div key={item.id} className="news__item">
                            <div className="news__item--description">
                                <div className="posted-on">
                                    <p className="posted-on__text">Posted on</p>
                                    <Link to={`/news/${item.id}`} className="posted-on__link">07/09/2024</Link>
                                </div>
                                <div className="posted-title">
                                    <h2>{item.title}</h2>
                                </div>
                                <div className="posted-content">
                                    <p>{item.description}</p>
                                </div>
                                <div className="posted-cta">
                                    <Link to={`/news/${item.id}`} className="btn primary">
                                        READ MORE
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                </div>
                            </div>
                            <div className="news__item--thumbnail">
                                <Link to={`/news/${item.id}`}>
                                    <img src={item.thumbnail} alt={item.title}/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
