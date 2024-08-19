// src/components/Header/Header.jsx
import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png"; // Adjust path as necessary

const Header = () => (
  <header className="header">
    <img src={logo} alt="Coffee Shop Logo" className="logo" />
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
