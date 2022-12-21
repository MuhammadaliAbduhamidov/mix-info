import React from "react";
import Marquee from "react-fast-marquee";
import GoldenHouse from "../assets/img/GOLDEN HOUSE.png";

function Partner() {
  return (
    <div className="partner">
      <h1>Our partners</h1>
      <div className="partner-img">
        <Marquee pauseOnHover speed={100}>
          {[1, 2, 3, 4, 5].map((_) => (
            <img src={GoldenHouse} alt="" />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Partner;
