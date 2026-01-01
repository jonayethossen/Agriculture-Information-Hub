import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import heroImg1 from "../assets/photo1.jpg";
import heroImg2 from "../assets/photo2.jpg";
import heroImg3 from "../assets/photo3.jpg";

const Slider = () => {
  // slider data
  const slidesData = [
    {
      id: 1,
      title: "Bangladesh Liberation War Archive",
      description:
        "Explore the historic documents and rare collections of 1971.",
      image: heroImg1,
      buttonText: "Explore Archive",
    },
    {
      id: 2,
      title: "Voices of Freedom Fighters",
      description:
        "Listen to the firsthand testimonies of those who fought for us.",
      image: heroImg2,
      buttonText: "Listen Interviews",
    },
    {
      id: 3,
      title: "Rare Historical Documents",
      description:
        "Access official treaties, declarations, and correspondence.",
      image: heroImg3,
      buttonText: "View Documents",
    },
  ];

  return (
    <div className="w-full h-125 md:h-150 overflow-hidden">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className="h-full w-full"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 text-center px-4 max-w-4xl">
                <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                  {slide.description}
                </p>
                <button className="bg-[#006a4e] hover:bg-[#f42a41] text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
