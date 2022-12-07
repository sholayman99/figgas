import React from 'react';
import Banner from '../Banner/Banner';
import Form from '../Form/Form';
import ServeFood from '../ServeFood/ServeFood';
import Story from '../Story/Story';

const Home = () => {
    return (
        <div>
         <Banner />
         <Story />
         <ServeFood />
         <Form />   
        </div>
    );
};

export default Home;