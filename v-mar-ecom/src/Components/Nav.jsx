import React from 'react';
import { Phone } from 'lucide-react';
import './Nav.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="left-info">
        <Phone className="phone-icon" />
        <span>+1 (555) 123-4567</span>
        <span className="delivery-text">Free delivery on orders over $50</span>
      </div>
      <div className="right-info">
        <span>Mon-Sat: 8AM-8PM | Sun: 9AM-6PM</span>
      </div>
    </div>
  );
};

export default TopBar;
