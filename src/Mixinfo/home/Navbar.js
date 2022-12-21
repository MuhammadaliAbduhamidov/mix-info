import React, { useState, useEffect } from "react";
import { MdLogin } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";
import "../assets/home.css";
import { FaArrowUp } from "react-icons/fa";
import logo from "../assets/img/logo.png";
import user from "../assets/img/user.png";
import { Backet, Like, Menu, Profil, Search } from "../assets/Svg";

function Navbar({ catalog, setCatalog }) {
  const [active, setActive] = useState(false);
  const [icon, setIcon] = useState(false);
  const [scroll, setScroll] = useState(false);
  const scrollUp = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      setScroll(true);
      setCatalog(false);
    } else {
      setScroll(false);
      setCatalog(true);
    }
  });

  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <h4>
              <Typewriter
                options={{
                  strings: ["Welcome to our online shop"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
            <div className="login">
              <select name="" id="">
                <option value="1">ENG</option>
                <option value="2">UZB</option>
                <option value="3">РУС</option>
              </select>
              <span></span>
              <h3>Login</h3>
            </div>
          </div>
        </div>
      </header>
      <div className="navbar">
        <div className="container">
          <div className="navbar-item">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navbar-inp">
              <div className="navbar-form">
                <input type="search" placeholder="Search here" />
                <select name="" id="">
                  <option value="1">Categories</option>
                  {/* {data.map((item, i) => (
                    <option key={i} value="2">
                      {item.title_en}
                    </option>
                  ))} */}
                </select>
                <div className="navbar-search">
                  <Search />
                </div>
              </div>
              <div className="navbar-icon">
                <div className="like">
                  <Like />
                  <div className="number">3</div>
                </div>
                <NavLink to={"/cart"}>
                  <div className="backet">
                    <Backet />
                    <div className="number">4</div>
                  </div>
                </NavLink>
                <div onClick={() => setIcon(!icon)} className="user">
                  <Profil />
                </div>
                <div className={`profil ${icon ? "profil__active" : ""}`}>
                  <img src={user} alt="" />
                  <div className="sign">
                    <MdLogin />
                    <button>Sign in</button>
                  </div>
                  <div className="sign">
                    <AiOutlineUserAdd />
                    <button>Sign up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="category">
              <div className="menu" onClick={() => setCatalog(!catalog)}>
                <Menu />
                <h2>ALL COLLECTIONS</h2>
              </div>
              {/* <ul className={catalog ? "menu__active" : ""}>
                {data.map((item, i) => (
                  <li
                    key={i}
                    className={active === i ? "active" : ""}
                    onClick={() => setActive(i)}
                  >
                    {item.title_en}
                  </li>
                ))}
              </ul> */}
            </div>
            <nav>
              <ul>
                <NavLink to={"/"}>
                  <li>
                    <label>HOME</label>
                    <span></span>
                  </li>
                </NavLink>
                <NavLink to={"/product"}>
                  <li>
                    <label>SHOP</label>
                    <span></span>
                  </li>
                </NavLink>
                <li>
                  <label>BLOG</label>
                  <span></span>
                </li>
                <NavLink to={"/aboutPage"}>
                  <li>
                    <label>ABOUT</label>
                    <span></span>
                  </li>
                </NavLink>
                <li>
                  <label>CONTACT US</label>
                  <span></span>
                </li>
              </ul>
            </nav>
            {scroll ? (
              <div onClick={scrollUp} className="scrollTop">
                <FaArrowUp />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
