import React from "react";
import { Stars } from "../assets/Svg";
import customer from "../assets/img/customer.png";
import Animate from "./Animate";

function Customer() {
  return (
    <div className="container">
      <div className="customer">
        <div className="customer-text">
          <h1>What customers say</h1>
          <p>Faucibus orci luctus et ultrices posuere cubilia curae.</p>
        </div>
        <div className="customer-cards">
          {[1, 2, 3].map((_) => (
            <Animate
              element={
                <div className="customer-card">
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Stars key={i} />
                    ))}
                  </div>
                  <p>
                    "Aliquam erat volutpat. Nulla pretium nec urna et convallis.
                    Ut varius mi lacus, nec molestie libero ultricies nec.
                    Aenean lacinia dui elit, ut gravida quam."
                  </p>
                  <div className="customer-card-img">
                    <img src={customer} alt="" />
                    <div className="customer-card-text">
                      <h3>Michael Webb</h3>
                      <p>Customer</p>
                    </div>
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

export default Customer;
