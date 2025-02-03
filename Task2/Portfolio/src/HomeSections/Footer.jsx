import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/footer.css"; // Import CSS

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? "dark-mode" : ""}`}>
      <h1 className="footer-title">Eng_Aweis</h1>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="#" className="icons"><FaFacebook /></a>
        <a href="#" className="icons"><FaTwitter /></a>
        <a href="#" className="icons"><FaInstagram /></a>
        <a href="#" className="icons"><FaLinkedin /></a>
      </div>

      {/* Rights Reserved */}
      <p className="rights">© {new Date().getFullYear()} All Rights Reserved.</p>

      {/* Developer Credit */}
      <p className="developer">Developed by: <a href="https://engaweis.netlify.app/">Eng_Aweis</a></p>
    </footer>
  );
};

export default Footer;
