import React from "react";
import circle from "../assets/img/circle.png";

function Factory() {
  return (
    <div className="factory">
      <div className="factory-img">
        <h1>
          Show <br /> Room
        </h1>
      </div>
      <div className="factory-img">
        <h1>Factory</h1>
      </div>
      <div className="circle">
        <img src={circle} alt="" />
      </div>
    </div>
  );
}

export default Factory;
