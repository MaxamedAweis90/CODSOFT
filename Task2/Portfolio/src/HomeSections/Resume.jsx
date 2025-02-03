import React from "react";
import "../styles/resume.css"; // Import the styles

const Resume = ({ darkMode }) => {
  const educationData = [
    { year: "2018 - 2022", degree: "Bachelor's in Computer Science", school: "XYZ University" },
    { year: "2016 - 2018", degree: "High School Diploma", school: "ABC High School" },
    { year: "2015 - 2016", degree: "Web Development Course", school: "Online Bootcamp" },
    { year: "2014 - 2015", degree: "Graphic Design Course", school: "Design Academy" },
  ];

  const experienceData = [
    { year: "2023 - Present", position: "Front-End Developer", company: "Tech Solutions" },
    { year: "2021 - 2023", position: "UI/UX Designer", company: "Creative Agency" },
    { year: "2020 - 2021", position: "Intern Developer", company: "Startup Hub" },
    { year: "2019 - 2020", position: "Freelance Web Developer", company: "Self-Employed" },
  ];

  return (
    <div className={`resume-container ${darkMode ? "dark-mode" : ""}`}>
      <h2 className="resume-title">My Resume</h2>
      <div className="timeline-container">
        {/* Education Timeline */}
        <div className="timeline education">
          <h3 className="timeline-title">Education</h3>
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
              <span className="timeline-year">{item.year}</span>
              <h4 className="timeline-degree">{item.degree}</h4>
              <p className="timeline-school">{item.school}</p>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="timeline experience">
          <h3 className="timeline-title">Experience</h3>
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item">
              <span className="timeline-year">{item.year}</span>
              <h4 className="timeline-position">{item.position}</h4>
              <p className="timeline-company">{item.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;