import React, { useState } from "react";
import ScrollTop from "../ScrollTop";
import About from "./About";
import Accordion from "./Accordion";
import Blog from "./Blog";
import Customer from "./Customer";
import Export from "./Export";
import Factory from "./Factory";
import Footer from "./Footer";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Partner from "./Partner";
import Production from "./Production";
import Sales from "./Sales";

function Home() {
  const textName = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Chair",
    },
    {
      id: 3,
      name: "HoReCa",
    },
    {
      id: 4,
      name: "Bedroom",
    },
    {
      id: 5,
      name: "RestRoom",
    },
  ];
  const [catalog, setCatalog] = useState(true);

  return (
    <div>
      <ScrollTop />
      <Navbar catalog={catalog} setCatalog={setCatalog} />
      <Intro />
      <Production />
      <Sales item="HOT SALES" textName={textName} catalog={catalog} />
      <Accordion />
      <About />
      <Partner />
      <Blog />
      <Export />
      <Factory />
      <Customer />
      <Footer />
    </div>
  );
}

export default Home;
