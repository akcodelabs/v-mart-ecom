import React from "react";
import "./UserHeadder.css";
import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { UserRound } from "lucide-react";
import { ShoppingBag } from "lucide-react";

const UserHeadder = () => {
  return (
    <div className="header-container">
      <div className="welcome-text">Welcome to Organic Shop</div>

      <header className="header">
        <div className="header__logo">
          <span className="logo-icon">V</span>
          <span className="logo-text">
            ORGANIC <p>FOOD</p>
          </span>
        </div>

        <div className="header__search">
          <input type="text" placeholder="Search ..." />
          <button className="search-button">
            <Search className="searchicon" size={25} />
          </button>
        </div>

        <div className="header__icons">
          <Heart className="icon" title="Wishlist" size={20} />
          <UserRound className="icon" title="Account" size={20} />
          <ShoppingBag className="icon" title="Cart" size={20} />
        </div>
      </header>
    </div>
  );
};

export default UserHeadder;
