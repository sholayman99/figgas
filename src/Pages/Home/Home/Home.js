import React from 'react';
import Banner from '../Banner/Banner';
import Form from '../Form/Form';
import Gallery from '../Gallery/Gallery';
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
        </div>
    );
};

export default Home;