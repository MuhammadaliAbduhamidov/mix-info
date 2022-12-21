import React, { useState } from "react";
import "../assets/product.css";
import Accordion from "../home/Accordion";
import Blog from "../home/Blog";
import Customer from "../home/Customer";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import Sales from "../home/Sales";
import ScrollTop from "../ScrollTop";

function Product() {
  const [catalog, setCatalog] = useState(true);

  return (
    <div className="product">
      <ScrollTop />
      <Navbar catalog={catalog} setCatalog={setCatalog} />
      <Sales catalog={catalog} />
      <Accordion />
      <Customer />
      <Blog />
      <Footer />
    </div>
  );
}

export default Product;
