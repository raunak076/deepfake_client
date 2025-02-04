import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-home512.png";
import "../styles/nav.css"

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("menu-open");
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <img
            src={logo}
            alt="Deepfake Detection Logo"
            className="logo"
          />
          <span className="logo-text">Deepfake Detection</span>
        </Link>
      </div>

      <div
        className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

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
    </nav>
  );
};

export default Navbar;