import React from 'react';
import ProjectCard from '../Components/ProjectCard';  // Import the ProjectCard component
import '../styles/projects.css'


const Projects = () => {
  const projects = [
    {
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projectType: "Web Development",
      title: "Project One",
      description: "A web development project using React and Tailwind CSS."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1542641728-6ca359b085f4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projectType: "Mobile App",
      title: "Project Two",
      description: "A mobile app built with React Native."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projectType: "UI/UX Design",
      title: "Project Three",
      description: "A UI/UX design project for a tech company."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projectType: "Game Development",
      title: "Project Four",
      description: "A game development project using Unity and C#."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
      projectType: "Web Development",
      title: "Project Five",
      description: "An e-commerce website built with Node.js and MongoDB."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projectType: "Mobile App",
      title: "Project Six",
      description: "A data science project analyzing climate change patterns."
    },
  ];
  
  

  return (
    <div className="projects-section container">
      <h2 className="title">My Projects <span /></h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageUrl={project.imageUrl}
            projectType={project.projectType}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
