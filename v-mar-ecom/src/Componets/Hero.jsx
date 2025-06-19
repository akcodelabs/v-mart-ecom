import React from "react";
import "./Hero.css";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="top-bar">
      <div className="logo-section">
        <div className="logo-box">v</div>
        <div className="logo-text">
          <strong>V-Mart</strong>
          <span>Fresh Vegetables</span>
        </div>
      </div>

      <div className="search-section">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search vegetables..." />
      </div>

      <div className="cart-section">
        <FaShoppingCart />
        <span>Cart (0)</span>
      </div>
    </div>
  );
};

export default Hero;
