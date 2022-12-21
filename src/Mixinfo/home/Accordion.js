import React, { useState } from "react";
import Animate from "./Animate";

function Accordion() {
  const accor = [
    {
      id: 1,
      num: "01",
      title: "Alright, but what exactly do you do?",
      text: `  Timperdiet gravida scelerisque odio nunc. Eget felis, odio
      bibendum quis eget sit lorem donec diam. Volutpat sed orci
      turpis sit dolor est a pretium eget. Vitae turpis orci vel
      tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem
      venenatis urna.`,
    },
    {
      id: 2,
      num: "02",
      title:
        "I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together?",
      text: `  Sliding wardrobes are more functional and stylish than ordinary wardrobes, especially when it comes to a small apartment. A sliding wardrobe saves space thanks to sliding doors, and at the same time it is very spacious. In our online store you will find a wide range of sliding wardrobes in different styles.`,
    },
    {
      id: 3,
      num: "03",
      title: "Are your rates competitive?",
      text: `  Timperdiet gravida scelerisque odio nunc. Eget felis, odio
        bibendum quis eget sit lorem donec diam. Volutpat sed orci
        turpis sit dolor est a pretium eget. Vitae turpis orci vel
        tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem
        venenatis urna.`,
    },
    {
      id: 4,
      num: "04",
      title: "Why do you have a monthly project cap?",
      text: `  Timperdiet gravida scelerisque odio nunc. Eget felis, odio
        bibendum quis eget sit lorem donec diam. Volutpat sed orci
        turpis sit dolor est a pretium eget. Vitae turpis orci vel
        tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem
        venenatis urna.`,
    },
  ];
  const [active, setActive] = useState(0);

  const toogle = (i) => {
    if (active === i) {
      return setActive(null);
    }

    setActive(i);
  };
  return (
    <div className="accordion">
      <div className="container">
        <div className="accor">
          {accor.map((item, i) => (
            <Animate
              element={
                <div
                  key={i}
                  className={`accor-item ${active === i ? "accor-active" : ""}`}
                >
                  <span>{item.num}</span>
                  <div className="accor-text">
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>
                  </div>
                  <div
                    onClick={() => toogle(i)}
                    className={`accor-icon ${
                      active === i ? "active-icon" : ""
                    }`}
                  >
                    <span>+</span>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
