import React from 'react';
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

import './Hero.css';

const Header = () => {
  return (
    <div className="header">
      {/* Logo Section */}
      <div className="logo">
        <div className="logo-icon">V</div>
        <div>
          <h2>V-Mart</h2>
          <span>Fresh Vegetables</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <Search className="search-icon" />
        <input type="text" placeholder="Search vegetables..." />
      </div>

      {/* Cart */}
      <div className="cart">
        <ShoppingCart className="cart-icon" />
        <span>Cart (0)</span>
      </div>
    </div>
  );
};

export default Header;
