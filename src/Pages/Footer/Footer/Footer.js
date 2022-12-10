import React from 'react';
import CopyRight from '../CopyRight/CopyRight';
import FooterBody from '../FooterBody/FooterBody';

const Footer = () => {
    return (
        <footer className='mt-28'>
          <FooterBody />  
          <CopyRight />
        </footer>
    );
};

export default Footer;