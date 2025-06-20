import React from "react";
import styles from "./ContentSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textSection}>
        <div className={styles.header}>
          <span className={styles.headerPill}>Fresh & Organic</span>
        </div>
        <div>
          <h1 className={styles.bold}>
            Welcome to <span>V-Mart</span>
          </h1>
          <p className={styles.des}>
            Your Trusted Partner for fresh, organic vegetables delivered right
            to your doorstep. Quality guaranteed, freshness assured.
          </p>
          <div className={styles.buttons}>
            <button className={styles.shop}>Shop Now</button>
            <button className={styles.learn}>Learn More</button>
          </div>
        </div>
      </div>

      <div className={styles.imageSection}>
        <img
          src="https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg"
          alt="Birthday Cake"
          className="hero-image"
        />

        <div className={styles.ratingCard}>
          <span className={styles.star}>⭐</span>
          <strong>4.9/5</strong> &nbsp; (1000+ reviews)
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
