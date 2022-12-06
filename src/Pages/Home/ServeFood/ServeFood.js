import React from 'react';
import TabsUi from '../TabsUi/TabsUi';
import './ServeFood.css'

const ServeFood = () => {
    return (
        <div>
         <div className='serveFood-text'>
         <h2 className=''>What kind of Foods we serve for you</h2> 
          <p>Who are in extremely love with eco friendly system.</p> 
         </div>
         <TabsUi />
        </div>
    );
};

export default ServeFood;