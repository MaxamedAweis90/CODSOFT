import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <p>&copy; 2025 LandingPage. All rights reserved. &nbsp;</p>
          <h4>Dev:&nbsp; <a href="https://engaweis.netlify.app/" target="_blank" rel="noopener noreferrer">Eng-Aweis</a></h4>
        </div>
        <ul className="footer-links">
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
