import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Fotter = () => {
  return (
    <div>
      <style>{`
        .footer {
          background-color: #f8f9fa;
          color: #333;
          padding: 40px 20px 20px;
          font-family: sans-serif;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 30px;
          max-width: 1200px;
          margin: auto;
        }

        .footer-column {
          flex: 1 1 220px;
          min-width: 200px;
        }

        .logo {
          font-weight: bold;
          font-size: 24px;
          display: flex;
          align-items: center;
        }

        .logo-box {
          background-color: #4caf50;
          color: white;
          font-weight: bold;
          padding: 5px 10px;
          margin-right: 8px;
          border-radius: 4px;
        }

        .footer-column h3 {
          margin-bottom: 15px;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
        }

        .footer-column ul li {
          margin-bottom: 10px;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .footer-column ul li:hover {
          color: #4caf50;
        }

        .social-icons {
          margin-top: 15px;
          display: flex;
          gap: 10px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #ccc;
          padding-top: 20px;
          margin-top: 20px;
          font-size: 14px;
          flex-wrap: wrap;
        }

        .footer-bottom p {
          margin: 5px 0;
        }

        .heart {
          color: red;
        }

        @media screen and (max-width: 600px) {
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-bottom p {
            width: 100%;
            text-align: left;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
         
          <div className="footer-column">
            <h2 className="logo">
              <span className="logo-box">V</span> V-Mart
            </h2>
            <p>
              Your trusted partner for fresh, organic vegetables.
              <br />
              Quality guaranteed, freshness assured.
            </p>
            <div className="social-icons">
              <Facebook size={20} />
              <Instagram size={20} />
              <Twitter size={20} />
            </div>
          </div>

          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>Our Products</li>
              <li>Delivery Info</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Categories</h3>
            <ul>
              <li>Leafy Greens</li>
              <li>Root Vegetables</li>
              <li>Organic Produce</li>
              <li>Seasonal Specials</li>
              <li>Bulk Orders</li>
            </ul>
          </div>

         
          <div className="footer-column">
            <h3>Contact Info</h3>
            <ul>
              <li>📍 123 Fresh Street, Green City, GC 12345</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ hello@v-mart.com</li>
              <li>🕒 Mon–Sat: 8AM–8PM</li>
            </ul>
          </div>
        </div>

        
        <div className="footer-bottom">
          <p>© 2024 V-Mart. All rights reserved.</p>
          <p>Made with <span className="heart">❤</span> for fresh food lovers</p>
        </div>
      </footer>
    </div>
  );
};

export default Fotter;




