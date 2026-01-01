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
      title: "Empowering Farmers through Digital Innovation",
      description:
        "Access AI-powered crop diagnostics and modern farming techniques at your fingertips.",
      image: heroImg1,
      buttonText: "Diagnose Crop",
    },
    {
      id: 2,
      title: "Data-Driven Agriculture for Better Yields",
      description:
        "Get real-time weather alerts and soil health insights to optimize your harvest.",
      image: heroImg2,
      buttonText: "Market Insights",
    },
    {
      id: 3,
      title: "Real-Time Market Prices & Insights",
      description:
        "Stay updated with the latest wholesale rates from across the country to get the best price for your produce.",
      image: heroImg3,
      buttonText: "Identify Disease",
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
