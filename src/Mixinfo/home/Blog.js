import React from "react";
import { NavLink } from "react-router-dom";
import blogImg1 from "../assets/img/GI0A1673 1.png";
import blogImg2 from "../assets/img/IMAGE (2).png";
import blogImg3 from "../assets/img/IMAGE (3).png";
import { Arrow, ChevronRight } from "../assets/Svg";
import Animate from "./Animate";

function Blog() {
  const blogCard = [
    {
      id: 1,
      img: blogImg1,
      trend: "Trends",
      year: "May 10, 2022",
      title: "The 9 best homes in New York",
      descr:
        "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
    },
    {
      id: 2,
      img: blogImg2,
      trend: "DIY",
      year: "May 10, 2022",
      title: "How to easily buy a house with Realco",
      descr:
        "Praesent nec felis nisl. Phasellus eget lacus a metus fringilla fermentum sit amet.",
    },
    {
      id: 3,
      img: blogImg3,
      trend: "DIY",
      year: "May 10, 2022",
      title: "Renting houses - complete guide",
      descr:
        "Nunc in bibendum leo, gravida scelerisque quam nulla interdum tellus a turpis.",
    },
  ];
  const scrollUp = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <div className="container">
      <div className="blog">
        <h1>Blog</h1>
        <div className="blog-cards">
          {blogCard.map((item, i) => (
            <Animate
              element={
                <div className="blog-card" key={i}>
                  <NavLink to={"/headline" + item.id}>
                    <img onClick={scrollUp} src={item.img} alt="" />
                  </NavLink>
                  <div className="blog-in">
                    <div className="card-flex">
                      <div className="trend">{item.trend}</div>
                      <span>{item.year}</span>
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.descr}</p>
                    <NavLink to={"/headline" + item.id}>
                      <div className="blog-btn" onClick={scrollUp}>
                        <button>Read more</button>
                        <ChevronRight />
                      </div>
                    </NavLink>
                  </div>
                </div>
              }
            />
          ))}
        </div>
        <div className="btn-end">
          <button>Explore All</button>
          <Arrow />
        </div>
      </div>
    </div>
  );
}

export default Blog;
