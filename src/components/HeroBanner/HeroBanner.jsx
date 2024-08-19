// src/components/HeroBanner/HeroBanner.jsx
import React from "react";
import "./HeroBanner.css";
import bannerImage from "../../assets/images/hero-banner2.jpg";

const HeroBanner = () => (
  <div className="hero-banner">
    <img src={bannerImage} alt="Coffee Shop Banner" />
    <div className="hero-content">
      <h1>Welcome to</h1>
      <h1>Our Coffee Shop</h1>
      <p>Discover our range of delicious coffees and pastries.</p>
    </div>
  </div>
);

export default HeroBanner;
