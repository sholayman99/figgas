import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Rating } from "@mui/material";

const Carousel = () => {
  const data = [
    {
      img: "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg",
      name: "Destroyer",
      rating: 4,
      id: 1,
      review:
        "It’s a great experience. The ambiance is very welcoming and charming .Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.",
    },
    {
      img: "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg",
      name: "Destroyer",
      rating: 5,
      id: 2,
      review:
        "It’s a great experience. The ambiance is very welcoming and charming .Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.",
    },
    {
      img: "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg",
      name: "Destroyer",
      rating: 4,
      id: 3,
      review:
        "It’s a great experience. The ambiance is very welcoming and charming .Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.",
    },
  ];

  return (
    <section className="carousel ">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((u) => (
          <SwiperSlide key={u.id}>
            <div className="flex items-center justify-center lg:py-36 py-10 px-6">
              <div className="lg:max-w-lg">
                <div className="flex justify-center lg:mb-3">
                  <img className="w-24 rounded-full" src={u.img} alt="" />
                </div>
                <div className="flex justify-center font-bold lg:text-xl text-lg  ">
                
                  <h1> {u.name} </h1>
                </div>
                <div className="flex justify-center lg:mb-4">
                 
                  <Rating value={u.rating} readOnly size="large" />
                </div>
                <div className="flex justify-center ">
                  <p>{u.review} </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
