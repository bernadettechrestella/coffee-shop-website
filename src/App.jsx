// src/App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import "./App.css";
import "./assets/styles/global.css";

const App = () => (
  <div className="app-container">
    <Header />
    <div className="content-wrapper">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
    <Footer />
  </div>
);

export default App;
