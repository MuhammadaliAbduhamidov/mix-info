import React from "react";
import "../assets/headlinePage.css";
import Blog from "../home/Blog";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import Headline from "./Headline";
import HeadlineImg from "./HeadlineImg";

function HeadlinePage() {
  return (
    <div className="headlinePage">
      <Navbar />
      <Headline />
      <HeadlineImg />
      <Blog />
      <Footer />
    </div>
  );
}

export default HeadlinePage;
