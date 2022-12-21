import React from "react";
import click from "../assets/img/click.png";
import payme from "../assets/img/payme.png";
import { Facebook, Instagram, Pinterset, Twitter } from "../assets/Svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer-text">
            <p>
              Funking is the a popular Ecommerce site. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <div className="footer-icons">
              <Facebook />
              <Twitter />
              <Instagram />
              <Pinterset />
            </div>
          </div>
          <div className="footer-text">
            <h3>Help</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Shipping & Delivery</li>
              <li>Refund Policy</li>
              <li>Track Your Order</li>
            </ul>
          </div>
          <div className="footer-text">
            <h3>Store</h3>
            <ul>
              <li>Furniture</li>
              <li>Tabble</li>
              <li>Sofa</li>
              <li>Other</li>
            </ul>
          </div>
          <div className="footer-text">
            <h3>Supports</h3>
            <ul>
              <li>Feedbcak</li>
              <li>Contact us</li>
              <li>Download app</li>
              <li>Terms conditins</li>
            </ul>
          </div>
        </div>
        <div className="footer-end">
          <span>© 2021 Funking - All rights reserved.</span>
          <div className="end-img">
            <img src={click} alt="" />
            <img src={payme} alt="" />
          </div>
          <ul>
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
