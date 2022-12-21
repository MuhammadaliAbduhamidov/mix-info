import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import stars from "../assets/img/stars.png";
import Animate from "./Animate";
import { Eye, Cart, Heart, Share } from "../assets/Svg";
import { Link, NavLink, useParams } from "react-router-dom";
import { API__URL, API_IMG_URL_COVER, API_IMG_URL } from "../Api";

function Sales({ item, textName, catalog }) {
  const [current, setCurrent] = useState(4);
  const [btn, setBtn] = useState(false);
  const [icons, setIcons] = useState(null);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [dates, setDates] = useState([]);
  const params = useParams();
  console.log(params);

  if (modal === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  function closeBtn() {
    setCurrent(current + 4);
    if (current == 28) {
      setBtn(true);
    }
  }
  const scrollUp = () => {
    window.scrollTo({ top: 0 });
  };

  const modalActive = (e) => {
    if (e.target.className === "modal") {
      setModal(false);
    }
  };

  useEffect(() => {
    fetch(`${API__URL}/mix/all/product/223`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    fetch(`${API__URL}/mix/product/${params.id}`)
      .then((response) => response.json())
      .then((json) => setDates(json));
  }, [params.id]);

  return (
    <div className="container">
      <div className="sales">
        <h1>{item}</h1>
        <div className="sales-text">
          {textName?.map((item, i) => (
            <h2 key={i}>{item.name}</h2>
          ))}
        </div>
        <div className={`sales-cards ${catalog ? "active" : ""}`}>
          {data.slice(0, current).map((elem, i) => (
            <Animate
              element={
                <div key={i} className="sales-card">
                  <NavLink to={`/furniture${elem.id}`}>
                    <img
                      className="img"
                      onClick={scrollUp}
                      src={`${API_IMG_URL_COVER}` + elem.cover}
                      alt=""
                    />
                  </NavLink>

                  <h3>{elem.name_uz}</h3>
                  <h2>{elem.description_en.slice(0, 40)}</h2>
                  <div className="card-price">
                    <div className="price-item">
                      <span>{elem.price} UZS</span>
                      <del>{elem.old_price} UZS</del>
                    </div>
                    <img src={stars} alt="" />
                  </div>
                  <div className="sales-icons">
                    <div className="bg-icon">
                      <Heart />
                    </div>
                    <div className="bg-icon">
                      <Cart />
                    </div>
                    <div className="bg-icon">
                      <Share />
                    </div>
                    <div
                      className="bg-icon"
                      onClick={() => {
                        setModal(true);
                        setDates(elem);
                      }}
                    >
                      <Eye />
                    </div>
                  </div>
                </div>
              }
            />
          ))}
        </div>
        <div
          onClick={closeBtn}
          className={`sales-btn ${btn ? "btn-active" : ""}`}
        >
          <button>More</button>
        </div>
        {modal && (
          <div className="modal" onClick={modalActive}>
            <div className="modal__body">
              <span onClick={() => setModal(false)}>&times;</span>
              <Carousel>
                {dates?.images?.map((item) => {
                  return (
                    <img src={console.log(API_IMG_URL + item?.image)} alt="" />
                  );
                })}
              </Carousel>
              <div className="modal__text">
                <h1>{dates.name_uz}</h1>
                <span>{dates.description_uz}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sales;
