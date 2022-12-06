import React from 'react';
import TabUi from '../TabUi/TabUi';
import './ServeFood.css'

const ServeFood = () => {
    return (
        <div className='bg-slate-50'>
         <div className='serveFood-text mb-20'>
         <h2 className=''>What kind of Foods we serve for you</h2> 
          <p>Who are in extremely love with eco friendly system.</p> 
         </div>
        <TabUi />
        </div>
    );
};

export default ServeFood;