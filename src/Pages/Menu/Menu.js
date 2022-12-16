import React from 'react';
import Footer from '../Footer/Footer/Footer';
import Form from '../Home/Form/Form';
import ServeFood from '../Home/ServeFood/ServeFood';
import './Menu.css'
const Menu = () => {
    return (
        <>
        <div className='menu'>
            <h1>Menus</h1>
        </div>
       <ServeFood />
       <Form />
       <Footer />
        </>
    );
};

export default Menu;