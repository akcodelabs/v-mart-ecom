import React from "react";
import "./AboutPage.css";
import { FaEye } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Card : Image + Text */}
      <div className="card about-card">
        <div className="about-section">
          <div className="about-text">
            <h1>We Prefer only Organic Foods</h1>
            <p>
              Donec diam diam, mattis imperdiet est vitae, faucibus molestie
              nisi. Aliquam sed risus nec arcu rhoncus malesuada pretium non
              neque. Suspendisse eu ex ligula. Vestibulum maximus tellus metus,
              eget volutpat mi volutpat sed. Sed tempus erat at cursus
              facilisis. Maecenas laoreet leo.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://t4.ftcdn.net/jpg/06/59/75/61/360_F_659756124_ncKu04fQQArRQzwxNo6kS85DBUQxoCNv.jpg"
              alt="Organic Basket"
            />
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-box">
          <h2>450+</h2>
          <p>Products</p>
        </div>
        <div className="stat-box">
          <h2>300+</h2>
          <p>Branches</p>
        </div>
        <div className="stat-box">
          <h2>40,000+</h2>
          <p>Happy Users</p>
        </div>
        <div className="stat-box">
          <h2>7,889+</h2>
          <p>5 Star Reviews</p>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="floating-buttons">
        <button className="btn demo">
          <FaEye size={28} />
          Demos
        </button>
        <button className="btn buy">
          <IoIosCart size={30} />
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
