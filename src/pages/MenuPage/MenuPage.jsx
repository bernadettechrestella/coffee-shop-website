// src/pages/MenuPage/MenuPage.jsx
import React from "react";
import "./MenuPage.css";

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    image:
      "https://fore.coffee/wp-content/uploads/2023/08/Group-1321314173-3.png",
    price: "$3.99",
  },
  {
    id: 2,
    name: "Latte",
    image:
      "https://fore.coffee/wp-content/uploads/2023/08/Group-1321314173-3.png",
    price: "$4.99",
  },
  {
    id: 3,
    name: "Latte",
    image:
      "https://fore.coffee/wp-content/uploads/2023/08/Group-1321314173-3.png",
    price: "$4.99",
  },
  {
    id: 4,
    name: "Latte",
    image:
      "https://fore.coffee/wp-content/uploads/2023/08/Group-1321314173-3.png",
    price: "$4.99",
  },
  {
    id: 5,
    name: "Latte",
    image:
      "https://fore.coffee/wp-content/uploads/2023/08/Group-1321314173-3.png",
    price: "$4.99",
  },
];

const MenuPage = () => (
  <div className="menu-page">
    <h1>Our Menu</h1>
    <div className="menu-grid">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="menu-item"
          role="article"
          aria-labelledby={`item-${item.id}`}
        >
          <img src={item.image} alt={item.name} className="menu-item-image" />
          <h2 id={`item-${item.id}`} className="menu-item-name">
            {item.name}
          </h2>
          <p className="menu-item-price">{item.price}</p>
        </div>
      ))}
    </div>
  </div>
);

export default MenuPage;
