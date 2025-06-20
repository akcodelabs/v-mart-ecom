import React from "react";
import { Phone } from "lucide-react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <Phone size={18} style={{ marginRight: "6px" }} />
        <span>+1 (555) 123-4567</span>
        <span className="divider">Free delivery on orders over $50</span>
      </div>
      <div className="top-bar-right">Mon–Sat: 8AM–8PM | Sun: 9AM–6PM</div>
    </div>
  );
};

export default Nav;
