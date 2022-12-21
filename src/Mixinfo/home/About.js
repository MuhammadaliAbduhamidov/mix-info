import React from "react";
import { NavLink } from "react-router-dom";
import youtube from "../assets/img/youtube.png";
import Animate from "./Animate";

function About() {
  return (
    <div className="container">
      <div className="about">
        <Animate
          element={
            <div className="aboutL">
              <h1>ABOUT US</h1>
              <p>
                "Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut
                varius mi lacus, nec molestie libero ultricies nec. Aenean
                lacinia dui elit, ut gravida quam.""Aliquam erat volutpa
              </p>
              <NavLink to={"/aboutPage"}>
                <button>EXPLORE</button>
              </NavLink>
            </div>
          }
        />
        <Animate
          element={
            <div className="aboutR">
              <img src={youtube} alt="" />
            </div>
          }
        />
      </div>
    </div>
  );
}

export default About;
