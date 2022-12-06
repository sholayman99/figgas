import { Tab } from '@headlessui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TabUi.css'

const TabUi = () => {
    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }

    let [categories] = useState({
       AllMenu : [
          {
            id: 1,
            name:'Cappuccion',
            price: 49 ,
            details:'Usage of the Internet is becoming more common due to rapid advance.',
          },
         
        {
            id: 2,
            name:'Mocha',
            price: 49 ,
            details:'Usage of the Internet is becoming more common due to rapid advance.',
          },
          {
            id: 3,
            name:'Piccolo Latte',
            price: 49 ,
            details:'Usage of the Internet is becoming more common due to rapid advance.',
          },
          {
            id: 4,
            name:'Americano',
            price: 49 ,
            details:'Usage of the Internet is becoming more common due to rapid advance.',
          },
          {
            id: 5,
            name:'Macchiato',
            price: 49 ,
            details:'Usage of the Internet is becoming more common due to rapid advance.',
          },
          {
            id: 6,
            name:'Ristretto',
            price: 49 ,
            details:'Usage of the Internet is becoming more common due to rapid advance.',
          },
          
        ],
       Breakfast: [
        {
            id: 1,
            name:'Cappuccion',
            price: 49 ,
            details:'Usage of the Internet is becoming more common due to rapid advance.',
          },
        {
            id: 2,
            name:'Mocha',
            price: 49 ,
            details:'Usage of the Internet is becoming more common due to rapid advance.',
          },
        ],
        Lunch: [
            {
                id: 1,
                name:'Piccolo Latte',
                price: 49 ,
                details:'Usage of the Internet is becoming more common due to rapid advance.',
              },
              
        ],
        Dinner: [
            {
                id: 1,
                name:'Americano',
                price: 49 ,
                details:'Usage of the Internet is becoming more common due to rapid advance.',
              },
             
        ],
        BudgetMeal: [
            {
                id: 1,
                name:'Macchiato',
                price: 49 ,
                details:'Usage of the Internet is becoming more common due to rapid advance.',
              },
              
        ],
       Buffet: [
        {
            id: 1,
            name:'Ristretto',
            price: 49 ,
            details:'Usage of the Internet is becoming more common due to rapid advance.',
          },
        
        ],
      })
    return (
       <div className="w-full   px-2 py-16 sm:px-0  mb-20">
      <Tab.Group  >
        <Tab.List className="flex lg:flex-row md:flex-row  flex-col sm:flex-col  mx-16  lg:h-28 space-x-1 rounded-xl lg:shadow-lg bg-white p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 ',
                  'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2',
                  selected
                    ? 'selected'
                    : 'text-black hover:bg-black hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="lg:mt-6 mx-16 ">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl  p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400  focus:outline-none focus:ring-2'
              )}
            >
              <ul className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 py-10  gap-4 '>
                {posts.map((post) => (
                <div key={post.id} className="card max-w-lg rounded-lg bg-white ">
                <div className='flex p-4'>
                <div >
                  <h2 className="card-title font-semibold text-lg my-3">{post.name}</h2>
                  <p className='text-gray-500'>{post.details}</p>
                </div>
                <div>
                  <h3 className='card-title mt-3 font-semibold  text-primary'> <span>$</span>{post.price}</h3>
                </div>
                </div>
              </div>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
    );
};

export default TabUi;