import React from "react";
import "../styles/contact.css"; // Link the updated CSS file

const Contact = () => {
  return (
    <section className="contact-section container">
      <h2 className="title">Contact <span /></h2>
      
      <div className="contact-container">
        {/* Contact Information Section */}
        <div className="info-section">
          <h2>Get in Touch</h2>
          <div className="contact-info">
            <p><strong>Email:</strong> contact@example.com</p>
            <p><strong>Phone:</strong> +123 456 789</p>
            <p><strong>Home Phone:</strong> +987 654 321</p>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="form-section">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" className="input-field" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" className="input-field" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" className="input-field" rows="6" placeholder="Type your message here..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
