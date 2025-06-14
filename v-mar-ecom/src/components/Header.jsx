import { useState, useEffect } from 'react';
import './Style.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const cartItems = 3; // Example cart count

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${isSticky ? 'sticky' : ''}`}>
        <div className="header-top">
          <div className="logo-container">
            <button 
              className={`hamburger ${isMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <h1 className="logo">V Mart</h1>
          </div>

          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/categories">Categories</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="user-actions">
            <div className="search-box">
              <input type="text" placeholder="Search products..." />
              <button className="search-btn">🔍</button>
            </div>
            <div className="cart">
              🛒
              {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
            </div>
            <div className="auth-buttons">
              <button className="login-btn">Login</button>
              <button className="signup-btn">Sign Up</button>
            </div>
          </div>
        </div>

        <div className="welcome-banner">
          <p>Welcome to V Mart - Your one-stop shopping destination!</p>
        </div>
      </header>
    </>
  );
};

export default Header;