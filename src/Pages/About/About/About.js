import React from 'react';
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
        </div>
    );
};

export default About;