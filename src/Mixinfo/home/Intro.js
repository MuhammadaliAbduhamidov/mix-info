import React, { useState } from "react";
import Slider from "react-slick";
import furniture from "../assets/img/Furniture 1.png";

function Intro() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  

  return (
    <div className="container">
      <div className="intro">
        <Slider {...settings}>
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="intro-item">
              <div className="intL">
                <h1>WELL DESIGNED FURNITURES HERE! Up to 20% discount </h1>
              </div>
              <div className="intR">
                <img src={furniture} alt="" />
              </div>
            </div>
          ))}
        </Slider>
       
      </div>
    </div>
  );
}

export default Intro;
