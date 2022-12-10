import React from 'react';
import './FooterBody.css'
import { BsArrowRightCircle } from 'react-icons/bs';

const FooterBody = () => {
    return (
        <section className='footer-body'>
          <div>
           <h2 className='text-xl font-bold pb-6'>Opening Hours</h2>

           <div className='flex items-center justify-between'>
            <h3>Monday-Friday</h3>
            <h3>08.00 am - 10.00 pm</h3>
            </div>

            <div className="flex items-center justify-start py-4">
            <div style={{ height: "1.2px" }} className="bg-gray-400 w-full">
            </div>
            </div>

           <div className='flex items-center justify-between'>
            <h3>Saturday</h3>
            <h3>08.00 am - 10.00 pm</h3>
            </div>

            <div className="flex items-center justify-start py-4">
            <div style={{ height: "1.2px" }} className="bg-gray-400 w-full">
            </div>
            </div>

           <div className='flex items-center justify-between'>
            <h3>Sunday</h3>
            <h3>08.00 am - 10.00 pm</h3>
            </div>

            <div className="flex items-center justify-start py-4">
            <div style={{ height: "1.2px" }} className="bg-gray-400 w-full">
            </div>
            </div>

           

          </div>  
          <div>
            <h2 className='text-xl font-bold mb-6'>Contact Us</h2>
            <p>56/8, los angeles, rochy beach, Santa monica, United states of america - 1205</p>
            <h1 className='text-2xl font-bold my-4'>012-6532-568-9746</h1>
            <h1 className='text-2xl font-bold'>012-6532-569-9748</h1>
          </div>
          <div>
            <h2 className='text-xl font-bold mb-6'>Newsletter</h2>
            <p>You can trust us. we only send promo offers, not a single spam.</p>
            <div className='mt-8 flex'>
           <div> <input className='py-2 pl-2 w-72 rounded-3xl' placeholder='Your Email Address' type={'email'}  /></div>
           <div className='text-4xl '>
            <button type='submit' >  <BsArrowRightCircle /></button>
            </div>
            </div>
              
             
                
          
            </div>
        
        </section>
    );
};

export default FooterBody;