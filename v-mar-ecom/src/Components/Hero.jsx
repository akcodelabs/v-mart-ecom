import React from "react";
import "./Hero.css";
import { ShoppingCart, Search } from "lucide-react";

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
        <Search className="search-icon" size={18} />
        <input type="text" placeholder="Search vegetables..." />
      </div>

      <div className="cart-section">
        <ShoppingCart size={20} />
        <span>Cart (0)</span>
      </div>
    </div>
  );
};

export default Hero;
