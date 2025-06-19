import React from 'react';
import './Services.css';
import { FaTruck, FaClock, FaShieldAlt, FaHeadphones } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <p className="subtitle">We're committed to providing exceptional service with every order</p>
      <div className="services-container">
        <div className="service-card">
          <div className="icon-wrapper blue">
            <FaTruck />
          </div>
          <h3>Free Delivery</h3>
          <p>Free delivery on orders over $50. Fast and reliable service to your doorstep.</p>
        </div>
        <div className="service-card">
          <div className="icon-wrapper green">
            <FaClock />
          </div>
          <h3>Same Day Delivery</h3>
          <p>Order before 2 PM and get your vegetables delivered the same day.</p>
        </div>
        <div className="service-card">
          <div className="icon-wrapper purple">
            <FaShieldAlt />
          </div>
          <h3>Quality Guarantee</h3>
          <p>100% satisfaction guaranteed. Fresh or your money back, no questions asked.</p>
        </div>
        <div className="service-card">
          <div className="icon-wrapper orange">
            <FaHeadphones />
          </div>
          <h3>24/7 Support</h3>
          <p>Our customer service team is always ready to help you with any questions.</p>
        </div>
      </div>
    </section>
  );
};
export default Services;
