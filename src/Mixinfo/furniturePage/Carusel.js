import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Arrowback, Car, Mark } from "../assets/Svg";
import caruselImg from "../assets/img/carusel img.png";
import caruselImg2 from "../assets/img/carusel img (2).png";
import Animate from "../home/Animate";
import { useParams } from "react-router-dom";
import { API__URL, API_IMG_URL } from "../Api";

function Carusel() {
  const params = useParams();

  const [dates, setDates] = useState([]);
  useEffect(() => {
    fetch(`${API__URL}/mix/product/${params?.id}`)
      .then((response) => response.json())
      .then((json) => setDates(json));
  }, [params?.id]);

  return (
    <div className="container">
      <div className="detail">
        <div className="detail__btn">
          <Arrowback />
          <button>BACK</button>
        </div>
        <div className="carusel">
          <Animate
            element={
              <Carousel>
                {dates?.images?.map((item) => (
                  <img src={API_IMG_URL + item.image} alt="" />
                ))}
              </Carousel>
            }
          />
          <Animate
            element={
              <div className="carusel__text">
                <h1>{dates.name_uz}</h1>
                <h2>{dates.price} UZS</h2>
                <p>{dates.description_uz}</p>
                <div className="delivery">
                  <div>
                    <div className="delivery__item">
                      <div className="delivery__icon">
                        <Car />
                      </div>
                      <div className="delivery__text">
                        <h3>Bepul yetkazib berish </h3>
                        <span>Yetkazib berish xizmati bepul</span>
                      </div>
                    </div>
                    <div className="delivery__item">
                      <div className="delivery__icon">
                        <Mark />
                      </div>
                      <div className="delivery__text">
                        <h3>Qaytib olish shartlari</h3>
                        <span>Learn More </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button>Hoziroq xarid qilish</button>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Carusel;
