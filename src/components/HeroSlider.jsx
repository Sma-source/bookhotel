import React from "react";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import required modules
import { EffectFade, Autoplay } from "swiper";
// img
import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img1,
    btnText: "Room & Suites",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img2,
    btnText: "Room & Suites",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img3,
    btnText: "Room & Suites",
  },
];

const HeroSlider = () => {
  return (
    <div className="heroSlider h-[600px] lg:h-[860px] bg-black">HeroSlider</div>
  );
};

export default HeroSlider;
