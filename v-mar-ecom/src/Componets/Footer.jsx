import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Welcome</h3>
          <p>Nullam porttitor pharetra ullamcorper.</p>
          <p>Praesent varius erat vitae nibh.</p>
          <p>Suspendisse consectetur ipsum augue,<br />
          a varius enim tempus aade varius erat vitae nibh.</p>
        </div>

        <div className="footer-column">
          <h3>Connect With Us</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Whatsapp</p>
        </div>

        <div className="footer-column">
          <h3>Useful Link</h3>
          <p>Multiple Branches</p>
          <p>Take Franchise</p>
          <p>Scheduled Offers</p>
          <p>More Links</p>
        </div>

        <div className="footer-column">
          <h3>Contact Details</h3>
          <p>Address: 3548 Columbia Mine Road,<br />
          Wheeling, West Virginia, 26003</p>
          <p>Contact: 304-559-3023</p>
          <p>Email: shopnow@store.com<br />
          contact@top.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright | Th Shop Mania | Developed by ThemeHunk</p>
      </div>
    </footer>
  );
};

export default Footer;
