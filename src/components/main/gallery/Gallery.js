import React from 'react';
// Gallery Item
import GalleryItem from './GalleryItem';
// Title
import Title from '../../parts/Title';

const Gallery = ({ items }) => {
    return (
        <section id="gallery" className="gallery">
            <div className="container-m p-1">
                <Title title=".work&Projects" subtitle="Commercial work" sectionId="skills" className="primary" direction="down" />
                <div className="gallery__content">
                    {items.map((item) => (
                        <GalleryItem key={item.id} item={item}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
