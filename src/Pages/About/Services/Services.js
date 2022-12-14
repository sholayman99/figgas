import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    const services =[
        {
            id: 1,
            img:'https://www.theworktop.com/wp-content/uploads/2015/12/Raisin-Bread-Grilled-Cheese-3.jpg',
            name:'Bread Fruit Cheese Sandwich',
            details:'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.'
        },
        {
            id:2 ,
            img:'https://rasamalaysia.com/wp-content/uploads/2012/01/ginger_and_scallion_beef_thumb-1-480x360.jpg',
            name:'Beef Cutlet with Spring Onion',
            details:'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.'
        },
        {
            id: 3,
            img:'https://img.freepik.com/premium-photo/appetizing-beef-sweet-sauce-close-up-chopped-beef-meat-cherry-sauce-with-vegetables-plate-delicious-european-cuisine_211786-2482.jpg',
            name:'Meat with sauce & Vegetables',
            details:'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.'
        },
    ]
    return (
        <section className='services' >
            <div className='services-text'>
            <h1>What Kind of Services we Offer</h1>
            <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className='service'>
                {
                    services.map(s=><div key={s.id} className='service-card' >
                        <img src={s.img} alt={s.name} />
                        <h2 > 
                            <Link to={'/'}>{s.name}</Link>
                        </h2>
                        <p>{s.details} </p>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Services;