import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Tabe = () => {
  return (
    <div id="hero" className="tabe-container">
      <div className="tabe-content container">
        {/* Phone and Gmail section */}
        <div className="contact-info">
          <div className="phone">
            <h3><FaPhoneAlt /> &nbsp;</h3>
            <p>+123 456 7890</p>
          </div>
          <div className="gmail">
            <h3><FaEnvelope /> &nbsp;</h3>
            <p>example@gmail.com</p>
          </div>
        </div>

        {/* Social Media section */}
        <div className="social-media">
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter /> 
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> 
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub /> 
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube /> 
            </a>
            <a href="https://wa.me/11234567890" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Report Button */}
        <div className="report-btn">
          <button onClick={() => alert('Report Submitted')}>Report</button>
        </div>
      </div>
    </div>
  );
};

export default Tabe;
