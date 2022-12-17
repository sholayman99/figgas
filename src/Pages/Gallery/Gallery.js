import React from 'react';
import Footer from '../Footer/Footer/Footer';
import HomeGallery from '../Home/HomeGallery/HomeGallery';
import './Gallery.css'

const Gallery = () => {
    return (
        <>
        <div className='gallery'>
        <h1>Gallery</h1>
        </div>
        <HomeGallery />
        <Footer />    
        </>
    );
};

export default Gallery;