import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay,Navigation} from "swiper";
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
      modules={[Pagination,Autoplay,Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={
           true
        }
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {data.map((u) => (
          <SwiperSlide key={u.id}>
            <div className="flex items-center justify-center lg:py-36 md:py-28 py-10 px-8">
              <div className="lg:max-w-lg md:max-w-lg">
                <div className="flex justify-center lg:mb-3 md:mb-3">
                  <img className="lg:w-24 w-16 rounded-full" src={u.img} alt="" />
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
