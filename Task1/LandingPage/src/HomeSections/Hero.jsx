import { FaMobileAlt, FaCloud, FaCode } from "react-icons/fa"; // Importing tech-related icons
import mobile from '../Assets/mobile.png';

const Hero = () => {
  return (
    <section className="hero height">
      <div className="HeroWrapper">
        <div className="container">
          {/* Left Section: Hero Image with Floating Icons */}
          <div className="hero-image">
            <img src={mobile} alt="Mobile illustration" className="hero-img" />
            <div className="floating-item floating-mobile">
              <FaMobileAlt className="tech-icon" /> {/* Mobile icon */}
            </div>
            <div className="floating-item floating-cloud">
              <FaCloud className="tech-icon" /> {/* Cloud icon */}
            </div>
            <div className="floating-item floating-code">
              <FaCode className="tech-icon" /> {/* Code icon */}
            </div>
          </div>
          
          {/* Right Section: Text Content */}
          <div className="hero-info">
            <h1>Welcome to Our Landing Page</h1>
            <p>We offer top-notch solutions tailored to drive your business forward.</p>
            <p>Our team of experts is here to help you achieve your goals with innovative strategies.</p>
            <span></span>
            <p>Discover how our services can empower your growth and success.</p>
            <p>Join us today and start experiencing the difference with our professional services.</p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
