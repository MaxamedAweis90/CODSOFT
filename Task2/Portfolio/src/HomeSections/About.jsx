import React, { useEffect, useState } from "react";
import "../styles/about.css"; 
import profile from '../assets/profile.jpg';


const profileImage = profile;

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.body.classList.contains("dark-mode"));
  }, []);

  return (
    <section id="about" className={`about-section ${isDarkMode ? "dark-mode" : ""}`}>
      <h2 className="title">About Me <span /></h2>
      
      <div className="about-container">
        {/* Left: Profile Image */}
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>

        {/* Right: About Info */}
        <div className="about-text">
          <p className="intro">
            Hello! I'm <strong>Mohamed Aweys</strong>, a passionate web developer with a deep love for coding and design.
            I specialize in **React, JavaScript, and UI/UX** development, always striving to create smooth and interactive user experiences.
          </p>

          {/* Personal Details */}
          <div className="details">
            <p><span>&gt; _ Name:</span> Mohamed Aweys</p>
            <p><span>&gt; _ Date of Birth:</span> January 1, 2002</p>
            <p><span>&gt; _ Location:</span> Your City, Country</p>
            <p><span>&gt; _ Skills:</span> React, JavaScript, Tailwind, UI/UX</p>
            <p><span>&gt; _ Education:</span> Google IT Support, Self-Taught Developer</p>
            <p><span>&gt; _ Experience:</span> 3+ years in Frontend Development, working on real-world projects.</p>
            <p><span>&gt; _ Hobbies:</span> Coding, Graphics Design, Video Editing, Learning new tech.</p>
            <p><span>&gt; _ Philosophy:</span> "Code is like humor. When you have to explain it, it’s bad."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
