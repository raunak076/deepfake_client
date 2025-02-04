import React, { useState } from "react";
import { Link } from "react-router-dom"; // For routing (if using React Router)
import logo from "../assets/logo-home512.png";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("menu-open");
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
      <div
        className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMobileMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/deepfake-news" onClick={toggleMobileMenu}>
            Deepfake News
          </Link>
        </li>
        <li>
          <Link to="/detected-deepfakes" onClick={toggleMobileMenu}>
            Detected Deepfakes
          </Link>
        </li>
        <li>
          <Link to="/about-us" onClick={toggleMobileMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact-us" onClick={toggleMobileMenu}>
            Contact
          </Link>
        </li>
        <li className="navbar-cta">
          <Link to="/detect" className="cta-button" onClick={toggleMobileMenu}>
            Get Started
          </Link>
        </li>
      </ul>

      {/* Desktop CTA button */}
      {/* <div className="navbar-cta desktop-only">
        <Link to="/detect" className="cta-button">
          Get Started
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
