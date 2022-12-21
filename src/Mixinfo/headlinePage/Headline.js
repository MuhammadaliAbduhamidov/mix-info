import React from "react";
import { NavLink } from "react-router-dom";
import { Arrowback, User } from "../assets/Svg";

function Headline() {
  return (
    <div className="container">
      <div className="headline">
        <NavLink to={"/"}>
          <div className="detail__btn">
            <Arrowback />
            <button>BACK</button>
          </div>
        </NavLink>
        <div className="headline__text">
          <h1>There gonna be headline</h1>
          <div className="headline__user">
            <User />
            <span>Abdulhamid Yakubov</span>
          </div>
          <p>
            YEcophon Solo™ Rectangle Akutex HS акустическое решение, применяемое
            в тех случаях когда затруднена установка потолка "от стены до
            стены". Панель звукопоглощающая, без обрамления, крепиться с
            использованием аксессуаров Connect™ имеющих класс коррозионной
            стойкости С4. Панель выпускается в различных размерах с весом около
            7–14 кг. Панель изготовлена из стекловолокна высокой плотности с
            покрытием Akutex™ HS с обеих сторон. Кромки прямые, окрашены.
            Ecophon Solo™ Rectangle Akutex HS подходит для применения в
            бассейнах, помещениях с высокой влажностью и коррозионной
            активностью,панели не бояться прямого попадания брызг. YEcophon
            Solo™ Rectangle Akutex HS акустическое решение, применяемое в тех
            случаях когда затруднена установка потолка "от стены до стены".
            Панель звукопоглощающая, без обрамления, крепиться с использованием
            аксессуаров Connect™ имеющих класс коррозионной стойкости С4. Панель
            выпускается в различных размерах с весом около 7–14 кг. Панель
            изготовлена из стекловолокна высокой плотности с покрытием Akutex™
            HS с обеих сторон. Кромки прямые, окрашены. Ecophon Solo™ Rectangle
            Akutex HS подходит для применения в бассейнах, помещениях с высокой
            влажностью и коррозионной активностью,панели не бояться прямого
            попадания брызг.
          </p>
         
        </div>
      </div>
    </div>
  );
}

export default Headline;
