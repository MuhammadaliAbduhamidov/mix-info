import React from "react";
import { Arrownext } from "../assets/Svg";
import Animate from "./Animate";
import furniture from "../assets/img/Rectangle.png";

function Production() {
  return (
    <div className="container">
      <div className="production">
        <h1>Our Production</h1>
        <div className="product-cards">
          {[1, 2].map((_, i) => (
            <div key={i} className="product-card-in">
              <div className="card-text">
                <h2>Modern Furniture Collections</h2>
                <h3>Starting from $500</h3>
                <div className="card-btn">
                  <button>Read more</button>
                  <Arrownext />
                </div>
              </div>
              <img src={furniture} alt="" />
            </div>
          ))}
        </div>
        <div className="product-cards">
          {[1, 2].map((_, i) => (
            <div key={i} className="product-card-in">
              <div className="card-text">
                <h2>Modern Furniture Collections</h2>
                <h3>Starting from $500</h3>
                <div className="card-btn">
                  <button>Read more</button>
                  <Arrownext />
                </div>
              </div>
              <img src={furniture} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Production;
