import React from 'react';
import Carousel from '../../Carosoul/Carousel';
import Footer from '../../Footer/Footer/Footer';
import Banner from '../Banner/Banner';
import Form from '../Form/Form';
import Gallery from '../Gallery/Gallery';
import LatestBlog from '../LatestBlog/LatestBlog';
import ServeFood from '../ServeFood/ServeFood';
import Story from '../Story/Story';

const Home = () => {
    return (
        <div>
         <Banner />
         <Story />
         <ServeFood />
         <Form /> 
         <Gallery />  
         <Carousel />
         <LatestBlog />
         <Footer />



        </div>
    );
};

export default Home;