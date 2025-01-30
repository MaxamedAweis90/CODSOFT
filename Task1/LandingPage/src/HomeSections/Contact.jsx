

const Contact = () => {
  const contactInfo = [
    {
      title: "Get in Touch",
      description: "We'd love to hear from you!",
    },
  ];

  return (
    <div className="wrapper">
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-grid">
            {/* Left Side: Contact Form */}
            <div className="contact-form">
              {contactInfo.map((info, index) => (
                <div key={index}>
                  <h2>{info.title}</h2>
                  <p>{info.description}</p>
                </div>
              ))}
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea rows="4" placeholder="Your Message"></textarea>
                <button>Send Message</button>
              </form>
            </div>

            {/* Right Side: Map */}
            <div className="contact-map">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093703!2d144.95373631531542!3d-37.81627974202195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sMelbourne%2C%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1604264081785!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              ></iframe>

            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
