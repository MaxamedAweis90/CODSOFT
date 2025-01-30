import { AiOutlineSolution, AiOutlineCode, AiOutlineBulb } from "react-icons/ai";

const Services = () => {
  const services = [
    { 
      title: "Consulting", 
      description: "Expert advice to boost your business. We analyze your business needs and offer tailored solutions to help you achieve your goals efficiently.", 
      icon: <AiOutlineSolution size={70} color="#a71515" />
    },
    { 
      title: "Development", 
      description: "Building modern and scalable apps. Our team specializes in web and mobile app development with cutting-edge technologies.", 
      icon: <AiOutlineCode size={70} color="#a71515" />
    },
    { 
      title: "Marketing", 
      description: "Enhance your online presence. We create data-driven marketing strategies, including SEO, content marketing, and social media management.", 
      icon: <AiOutlineBulb size={70} color="#a71515" />
    },
  ];

  return (
    <div className="wrapper">
      <section id="services" className="services">
        <div className="serviceswrap container">
          <h2>Our Services</h2>
          <div className="serviceCards">
            {services.map((service, index) => (
              <div key={index} className="card">
                {service.icon}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
