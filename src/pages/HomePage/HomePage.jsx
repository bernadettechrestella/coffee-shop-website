// src/pages/HomePage/HomePage.jsx
import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import "./HomePage.css";

const featuredProducts = [
  {
    id: 1,
    name: "Matcha Ice",
    image:
      "https://fore.coffee/wp-content/uploads/2023/08/Group-1321314173-3.png",
    price: "$4.99",
  },
  {
    id: 2,
    name: "Americano",
    image:
      "https://fore.coffee/wp-content/uploads/2023/08/Group-1321314173-3.png",
    price: "$5.99",
  },
  {
    id: 3,
    name: "Cappuccino",
    image:
      "https://fore.coffee/wp-content/uploads/2023/08/Group-1321314173-3.png",
    price: "$5.99",
  },
  {
    id: 4,
    name: "Americano",
    image:
      "https://fore.coffee/wp-content/uploads/2023/08/Group-1321314173-3.png",
    price: "$5.99",
  },
  {
    id: 5,
    name: "Cappuccino",
    image:
      "https://fore.coffee/wp-content/uploads/2023/08/Group-1321314173-3.png",
    price: "$5.99",
  },
];

const HomePage = () => (
  <div className="homepage">
    <HeroBanner />
    <FeaturedProducts products={featuredProducts} />
  </div>
);

export default HomePage;
