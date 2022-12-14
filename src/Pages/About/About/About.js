import React from 'react';
import Carousel from '../../Carosoul/Carousel';
import Footer from '../../Footer/Footer/Footer';
import Story from '../../Home/Story/Story';
import Services from '../Services/Services';
import './About.css'

const About = () => {
    return (
        <div>
           <div className='about-bg'>
          <h1>About Us</h1>
          </div>  
          <Story /> 
          <Services />
          <Carousel />
          <Footer />
        </div>
    );
};

export default About;