import { FaProjectDiagram, FaSmile, FaClock } from "react-icons/fa"; // Importing icons from react-icons

const Progress = () => {
  return (
    <div id="progress" className="progress height">
      <div className="wrapper container">
        <h1>Our Achievements</h1>
        <div className="counter">
          <div className="counter-item">
            <FaProjectDiagram className="icon" />
            <div className="text-box">
              <h3>150+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="counter-item">
            <FaSmile className="icon" />
            <div className="text-box">
              <h3>120+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="counter-item">
            <FaClock className="icon" />
            <div className="text-box">
              <h3>5+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
