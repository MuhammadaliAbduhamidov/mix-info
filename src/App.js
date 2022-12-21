import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "react-js-loader";
import "./App.css";
import AboutPage from "./Mixinfo/aboutPage/AboutPage";
import Cart from "./Mixinfo/cart/Cart";
import Furniture from "./Mixinfo/furniturePage/Furniture";
import HeadlinePage from "./Mixinfo/headlinePage/HeadlinePage";
import Home from "./Mixinfo/home/Home";
import Product from "./Mixinfo/product/Product";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  setInterval(() => {
    setIsLoading(true);
  }, 2000);
  return (
    <div className="App">
      {isLoading ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutPage" element={<AboutPage />} />
            <Route path="/furniture:id" element={<Furniture />} />
            <Route path="/headline:id" element={<HeadlinePage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <div className={"item"}>
          <Loader
            type="spinner-default"
            bgColor={"#000"}
            color={"#000"}
            size={100}
          />
        </div>
      )}
    </div>
  );
}

export default App;
