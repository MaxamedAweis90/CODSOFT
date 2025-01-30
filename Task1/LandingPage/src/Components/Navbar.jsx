import React, { useState } from "react";
import landingPage from "../Assets/landingpage1.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state to manage menu toggle

  const handleLinkClick = (section) => {
    setActiveLink(section);
    setIsMenuOpen(false); // close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // toggle the menu
  };

  return (
    <header className="navbar">
      <nav className="nav-container container">
        <div className="logo">
          <a href="#hero">
            <img src={landingPage} alt="Landing page logo" />
          </a>
        </div>
        <button
          className="hamburger-btn"
          onClick={toggleMenu}
        >
          &#9776; {/* Hamburger icon */}
        </button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <div className="logo">
          <a href="#hero">
            <img src={landingPage} alt="Landing page logo" />
          </a>
        </div>
          <li>
            <a
              href="#hero"
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => handleLinkClick('hero')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeLink === 'about' ? 'active' : ''}
              onClick={() => handleLinkClick('about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={activeLink === 'services' ? 'active' : ''}
              onClick={() => handleLinkClick('services')}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#team"
              className={activeLink === 'team' ? 'active' : ''}
              onClick={() => handleLinkClick('team')}
            >
              Team
            </a>
          </li>
          <li>
            <button className="contact-btn" onClick={() => window.location.href='#contact'}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
