import React, { useState } from "react";
import { Link } from "react-router-dom"; // For routing (if using React Router)
import logo from "../logo-home512.png";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <img
            src={logo} // Replace with your logo path
            alt="Deepfake Detection Logo"
            className="logo"
          />
          <span className="logo-text">Deepfake Detection</span>
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
        <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
        <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMobileMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/detect" onClick={toggleMobileMenu}>
            Detect Deepfake
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMobileMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/how-it-works" onClick={toggleMobileMenu}>
            How It Works
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMobileMenu}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Call-to-Action Button */}
      <div className="navbar-cta">
        <Link to="/get-started" className="cta-button">
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
