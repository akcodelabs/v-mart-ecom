import React from "react";
import "./contentsection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="text-section">
        <div className="header">
          <span className="header_pill">Fresh & Organic</span>
        </div>
        <div>
          <h1 className="bold">
            Welcome to <span>V-Mart</span>
          </h1>
          <p className="des">
            Your Trusted Partner for fresh, organic vegetables delivered right to your
            doorstep. Quality guaranteed, freshness assured.
          </p>
          <div className="buttons">
            <button className="shop">Shop Now</button>
            <button className="learn">Learn More</button>
          </div>
        </div>
      </div>

      <div className="image-section">
       <img
  src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/38/1600x800/landscape-1474645974-cakes-group-193.jpg?resize=640:*"
  alt="Birthday Cake"
  className="hero-image"
/>

        <div className="rating-card">
          <span className="star">⭐</span>
          <strong>4.9/5</strong> &nbsp; (1000+ reviews)
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
