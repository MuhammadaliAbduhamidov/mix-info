import React, { useState } from "react";
import "../assets/furniture.css";
import ScrollTop from "../ScrollTop";
import Navbar from "../home/Navbar";
import Carusel from "./Carusel";
import Description from "./Description";
import Sales from "../home/Sales";
import Production from "../home/Production";
import Accordion from "../home/Accordion";
import Footer from "../home/Footer";

function Furniture() {
  const [catalog, setCatalog] = useState(true);

  return (
    <div className="furniture">
      <ScrollTop />
      <Navbar />
      <Carusel />
      <Description />
      <Sales item="" textName={[]} catalog={catalog} />
      <Production />
      <Accordion />
      <Footer />
    </div>
  );
}

export default Furniture;
