import React from 'react'
import { FiPhone } from "react-icons/fi";
import './nav.css';

const Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
      <FiPhone />
        <span>+1 (555) 123-4567</span>
        <span className="divider">Free delivery on orders over $50</span>
      </div>
      <div className="top-bar-right">
        Mon–Sat: 8AM–8PM | Sun: 9AM–6PM
      </div>
    </div>
  );
};

export default Nav;
