import React from 'react';
import "./Projects.css"

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Mobile Applications",
      description: "",
      demoLink: "https://github.com/SamuraiM001/Mobile-Applications/tree/main",
      repoLink: "https://github.com/SamuraiM001/Mobile-Applications/tree/main",
      imageSrc: "https://m.media-amazon.com/images/I/71vGInRDuZL.png",
    },
    {
      id: 2,
      title: "React Projects",
      description: "",
      demoLink: "https://github.com/SamuraiM001/React-Apps",
      repoLink: "https://github.com/SamuraiM001/React-Apps",
      imageSrc: "https://cdn.iconscout.com/icon/free/png-512/free-logo-1889531-1597591.png?f=avif&w=256",
    },
    {
      id: 3,
      title: "Normal Sites",
      description: "",
      demoLink: "https://github.com/SamuraiM001/Sites",
      repoLink: "https://github.com/SamuraiM001/Sites",
      imageSrc: "https://www.searchenginejournal.com/wp-content/uploads/2021/05/15-things-that-prevent-google-from-indexing-your-site-60a636f1aea6a-1520x800.webp",
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2>Projects</h2>
      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.imageSrc} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-buttons">
              <a target='_blank' href={project.demoLink} className="project-button">
                Demo
              </a>
              <a target='_blank' href={project.repoLink} className="project-button">
                Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
