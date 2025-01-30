import { FaMobileAlt, FaCloud, FaCode } from "react-icons/fa"; // Importing tech-related icons
import { FaCheckCircle } from "react-icons/fa"; // Importing check icon
import Phone from "../Assets/mobile.png";

const AboutUs = () => {
  return (
    <section id="about" className="about container">
      <h1>About Us</h1>
      <div className="about-content">
        {/* Left Section: Image with Floating Tech Icons */}
        <div className="about-image">
          <img src={Phone} alt="About Us" className="image" />
          <div className="floating-item top-left">
            <FaMobileAlt className="tech-icon" /> {/* Mobile icon */}
          </div>
          <div className="floating-item bottom-left">
            <FaCloud className="tech-icon" /> {/* Cloud computing icon */}
          </div>
          <div className="floating-item right-middle">
            <FaCode className="tech-icon" /> {/* Code icon */}
          </div>
        </div>

        {/* Right Section: Text */}
        <div className="textwrapper">
          <span></span>
        
        <div className="about-text">
          <p>
            At our core, we specialize in delivering cutting-edge technological
            solutions to help businesses thrive in a fast-paced digital world.
            Our team of experienced professionals is passionate about leveraging
            the latest tools and technologies to transform your vision into
            reality.
          </p>
          <ul className="points">
            <li>
              <FaCheckCircle className="icon" />
              <strong>High-quality services:</strong> Every solution we offer is
              crafted with precision and attention to detail.
            </li>
            <li>
              <FaCheckCircle className="icon" />
              <strong>Dedicated professionals:</strong> Our team is committed to
              understanding and addressing your unique needs.
            </li>
            <li>
              <FaCheckCircle className="icon" />
              <strong>Customized solutions:</strong> Tailored strategies to help
              your business achieve its full potential.
            </li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
