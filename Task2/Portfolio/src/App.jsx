import React, { useState, useEffect } from "react";
import Header from "./HomeSections/Header";
import About from "./HomeSections/About";
import Skills from "./HomeSections/Skills";
import Projects from "./HomeSections/Projects";
import Resume from "./HomeSections/Resume";
import Contact from "./HomeSections/Contact";
import Navbar from "./HomeSections/Navbar";
import Footer from "./HomeSections/Footer";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to apply dark mode on root when toggled
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode"); // Apply dark mode globally
    } else {
      document.documentElement.classList.remove("dark-mode"); // Remove dark mode globally
    }
  }, [isDarkMode]);

  return (
    <>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="container" isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} >
        <section id="header" className="slides">
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </section>
        <section id="about" className="slides">
          <About />
        </section>
        <section id="skills" className="slides">
          <Skills />
        </section>
        <section id="projects" className="slides">
          <Projects />
        </section>
        <section id="resume" className="slides">
          <Resume />
        </section>
        <section id="contacts" className="slides">
          <Contact />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
