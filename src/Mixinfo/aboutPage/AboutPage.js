import React, { useState } from "react";
import "../assets/aboutPage.css";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import ScrollTop from "../ScrollTop";
import AboutText from "./AboutText";
import Gallery from "./Gallery";

function AboutPage() {
  const [catalog, setCatalog] = useState(true);
  return (
    <div>
      <ScrollTop />
      <Navbar catalog={catalog} setCatalog={setCatalog} />
      <AboutText />
      <Gallery />
      <Footer />
    </div>
  );
}

export default AboutPage;
