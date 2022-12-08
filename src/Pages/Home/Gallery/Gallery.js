import { Tab } from '@headlessui/react';
import React, { useState } from 'react';
import './Gallery.css'

const Gallery = () => {
    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }

    

    let [categories] = useState({
        All: [
          {
            id: 1,
            name:'Cappuccion',
            img:'https://coffeeaffection.com/wp-content/uploads/2021/02/does-a-cappuccino-have-caffeine.jpg'
          },
          {
            id: 2,
            name:'Mocha',
            img:'https://upload.wikimedia.org/wikipedia/commons/7/7e/Mocha_coffee.jpg'
          },
          {
            id: 3,
            name:'Piccolo Latte',
            img:'https://img.taste.com.au/TM4lbkq7/taste/2016/11/smokey-barbecue-chicken-pizza-83697-1.jpeg'
          },
          {
            id: 4,
            name:'Americano',
            img:'https://cdn.buttercms.com/AB7ud4YSE6nmOX0iGlgA'
          },
          {
            id: 5,
            name:'Macchiato',
            img:'https://www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg'
          },
          {
            id: 6,
            name:'Ristretto',
            img:'https://b.zmtcdn.com/data/pictures/7/19573337/9dcac8367dc6f3841a8be5abc237a15d_featured_v2.jpg'
          }

        ],
        Breakfast: [
          {
            id: 1,
            name:'Cappuccion',
            img:'https://coffeeaffection.com/wp-content/uploads/2021/02/does-a-cappuccino-have-caffeine.jpg'
          },
          {
            id: 2,
            name:'Mocha',
            img:'https://upload.wikimedia.org/wikipedia/commons/7/7e/Mocha_coffee.jpg'
          },
         

        ],
        Lunch: [
          {
            id: 1,
            name:'Piccolo Latte',
            img:'https://img.taste.com.au/TM4lbkq7/taste/2016/11/smokey-barbecue-chicken-pizza-83697-1.jpeg'
          }
        ],
        Dinner: [
          {
            id: 1,
            name:'Americano',
            img:'https://cdn.buttercms.com/AB7ud4YSE6nmOX0iGlgA'
          }
        ],
        Budget: [
          {
            id: 1,
            name:'Macchiato',
            img:'https://www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg'
          }
        ],
        Buffet: [
          {
            id: 1,
            name:'Ristretto',
            img:'https://b.zmtcdn.com/data/pictures/7/19573337/9dcac8367dc6f3841a8be5abc237a15d_featured_v2.jpg'
          }
        ],
         })

    return (
        <section className="w-full   px-2 pt-10 sm:px-0  pb-20 bg-slate-50 ">
            <div className='gallery-text' >
                <h1>Food and Customer Gallery</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>
        <Tab.Group  >
          <Tab.List className="flex lg:flex-row md:flex-row lg:mx-16  lg:h-28 space-x-1 rounded-xl lg:shadow-lg bg-white lg:p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg lg:py-2.5 md:py-2 py-1 lg:text-sm md:text-sm text-xs font-medium leading-5 ',
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
          <Tab.Panels className=" lg:mx-16 ">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl  p-3',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400  focus:outline-none focus:ring-2'
                )}
              >
                <ul className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-6  gap-10 '>
                  {posts.map((post) => (
                  <div key={post.id} className="card max-w-lg  rounded-lg  ">
                  <div className='flex'>
                  <div >
                 <img src={post.img} alt={post.name} />
                
                  </div>
                 
                  </div>
                </div>
                  ))}
                </ul>
               
              </Tab.Panel>
             
            ))}
             
          </Tab.Panels>
        </Tab.Group>
      </section>
    );
};

export default Gallery;