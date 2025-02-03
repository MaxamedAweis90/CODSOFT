import React, { useEffect, useState } from "react";
import "../styles/skills.css"; // Import CSS file

const Skills = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.body.classList.contains("dark-mode"));
  }, []);

  // Professional Skills (Bars)
  const professionalSkills = [
    { name: "JavaScript", percentage: 95 },
    { name: "React.js", percentage: 93 },
    { name: "Tailwind CSS", percentage: 87 },
    { name: "UI/UX Design", percentage: 65 },
    { name: "Problem Solving", percentage: 88 },
  ];

  // Other Skills (Circular Progress)
  const otherSkills = [
    { name: "Ms softwares", percentage: 93 },
    { name: "Adobe Photoshop", percentage: 90 },
    { name: "Adobe Illustrator", percentage: 75 },
    { name: "Adobe Premiere", percentage: 72 },
    { name: "Capcut", percentage: 85 },
  ];

  return (
    <section id="skills" className={`skills-section ${isDarkMode ? "dark-mode" : ""}`}>
      <h2 className="title">Skills <span /></h2>
      <div className="skills-container">

        {/* Professional Skills - Bar Progress */}
        <div className="professional-skills">
          <h3>Professional Skills</h3>
          {professionalSkills.map((skill, index) => (
            <div className="skill-bar" key={index}>
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${skill.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Skills - Circular Progress */}
        <div className="other-skills">
          <h3>Other Skills</h3>
          <div className="circle-skills">
            {otherSkills.map((skill, index) => (
              <div className="circle" key={index}>
                <div className="progress-circle">
                  <svg>
                    <circle className="bg" cx="50" cy="50" r="45"></circle>
                    <circle 
                      className="progress-fill-circle" 
                      cx="50" cy="50" 
                      r="45" 
                      style={{ strokeDashoffset: `calc(283 - (283 * ${skill.percentage}) / 100)` }} 
                    ></circle>
                  </svg>
                  <div className="circle-text">
                    <strong className="percentage">{skill.percentage}%</strong>
                  </div>
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
