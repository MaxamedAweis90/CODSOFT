import React from "react";
import "../styles/header.css"; // Ensure this path is correct
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDotCircle } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import profile from '../assets/profile.jpg';

const profileImage = profile;
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="text">
          <div className="available">
          <FaDotCircle className="dot-icon" />
          <h3>Available for work</h3>
          </div>
          <h1>Hi, my name is <span>Mohamed Aweys</span></h1>
          <h2>I'm a Frontend Developer</h2>
          <p>
            I specialize in creating beautiful, functional websites with React, JavaScript, and modern web technologies.
          </p>
           {/* Social Media Icons */}
      <div className="social-headers">
        <a href="#" className="icons"><FaFacebook /></a>
        <a href="#" className="icons"><FaTwitter /></a>
        <a href="#" className="icons"><FaInstagram /></a>
        <a href="#" className="icons"><FaLinkedin /></a>
      </div>
          <button className=" hireme-btn button">Hire Me</button>
        </div>

        <div className="profile">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-img"
          />
          <div className="floating-icons">
            <div className="icon html"><FaHtml5 /></div>
            <div className="icon css"><FaCss3Alt /></div>
            <div className="icon js"><FaJs /></div>
            <div className="icon react"><FaReact /></div>
            <div className="icon node"><FaNodeJs /></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
