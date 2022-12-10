import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LatestBlog.css";
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';

const LatestBlog = () => {
  const [blogs] = useState([
    {
      id: 1,
      date: "10  January 2022",
      title: "Cooking Perfect Fried Rice in minutes",
      description: "inappropriate behavior ipsum dolor sit amet, consectetur.",
      img: "https://www.simplyrecipes.com/thmb/RrIT5GcxpHru0ZHis39-wyXADNg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__12__2017-12-Chicken-Fried-Rice-3-c98348ac2e4545d9a3e637a780f09b70.jpg",
    },
    {
      id: 2,
      date: "10  January 2022",
      title: "Cooking Perfect Fried Rice in minutes",
      description: "inappropriate behavior ipsum dolor sit amet, consectetur.",
      img: "https://www.simplyhappyfoodie.com/wp-content/uploads/2019/05/egg-in-a-hole-1.jpg",
    },
    {
      id: 3,
      date: "10  January 2022",
      title: "Cooking Perfect Fried Rice in minutes",
      description: "inappropriate behavior ipsum dolor sit amet, consectetur.",
      img: "https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/sunday-grilled-steak-onions-recipe.jpg",
    },
    {
      id: 4,
      date: "10  January 2022",
      title: "Cooking Perfect Fried Rice in minutes",
      description: "inappropriate behavior ipsum dolor sit amet, consectetur.",
      img: "https://cookinginchinglish.com/wp-content/uploads/2020/03/2.jpg",
    },
  ]);

  return (
    <section className="blogs">
    
      <div className="section-text">
      <h1 >Latest From Our Blog</h1>
      <p >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
     
    
      <div className="blog">
        {Object.values(blogs).map((b) => (
          <div key={b.id}>
            <div className="card-body">
              <img src={b.img} alt="" />
              <button> {b.date} </button>
              
                <Link to={"/"}>
                    <h1>{b.title}</h1>
                </Link>
             
              <p className="text-gray-600"> {b.description} </p>

          <div className="flex items-center justify-between mt-3 text-gray-600">
           
           <div className="flex items-center ">
           <p className="text-lg"> <AiOutlineHeart/></p>
           <p className="text-md">15 Likes</p>
           </div>
           <div className="flex items-center ">
           <p className="mx-1"> <FaRegComment/> </p>
           <p>02 Comments</p>
           </div>
          </div>
        
          </div>
           
          </div>
        ))}
       
      </div>
    </section>
  );
};

export default LatestBlog;
