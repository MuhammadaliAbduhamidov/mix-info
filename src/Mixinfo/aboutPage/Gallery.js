import React from "react";
import room from "../assets/img/Rectangle 1215.png";
import flowers from "../assets/img/Rectangle 1217.png";
import chair from "../assets/img/Rectangle 1216.png";
import { Arrow } from "../assets/Svg";
import { Link } from "react-router-dom";
import Animate from "../home/Animate";

function Gallery() {
  return (
    <div className="container">
      <div className="gallery">
        <h1>PHOTOGALLERRY</h1>
        <div className="gallery-images">
          <div className="gallery-img">
            <Animate element={<img src={room} alt="" />} />
            <Animate element={<img src={flowers} alt="" />} />
          </div>
          <Animate element={<img src={chair} alt="" />} />
        </div>
        <div className="gallery-images">
          <Animate element={<img src={chair} alt="" />} />
          <div className="gallery-img">
            <Animate element={<img src={room} alt="" />} />
            <Animate element={<img src={flowers} alt="" />} />
          </div>
        </div>
        <Link to={"/"}>
          <div className="gallery-btn">
            <button>Back to main page</button>
            <Arrow />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
