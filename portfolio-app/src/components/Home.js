import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import the home.css file for card styles

const Home = () => {
    const projects = [
        {
          id: 1,
          title: "ChoryApp ",
          description: "This app is chat+stroy app.I named it ChoryApp",
          demoLink: "https://m.media-amazon.com/images/I/71vGInRDuZL.png",
          repoLink: "https://github.com/SamuraiM001/Mobile-Applications/tree/main/ReactNative/ChatApp",
          imageSrc: "https://m.media-amazon.com/images/I/71vGInRDuZL.png",
        },
        {
          id: 2,
          title: "Project 2",
          description: "Another amazing project with some great features!",
          demoLink: "https://www.example.com/demo2",
          repoLink: "https://github.com/example/project2",
          imageSrc: "https://www.example.com/image2.jpg",
        },
        {
          id: 3,
          title: "Project 3",
          description: "Check out this awesome project that I built from scratch!",
          demoLink: "https://www.example.com/demo3",
          repoLink: "https://github.com/example/project3",
          imageSrc: "https://www.example.com/image3.jpg",
        },
        // Add more projects as needed
      ];
      
  return (
    <div className="section">
      <h1 className="section-title">Welcome to My Portfolio</h1>

      <div className="cta-buttons">
        <Link to="/projects" className="cta-button">
          View Projects
        </Link>
        <Link to="/skills" className="cta-button">
          Explore Skills
        </Link>
        <Link to="/education" className="cta-button">
          Check Education
        </Link>
        <Link to="/contact" className="cta-button">
          Contact Me
        </Link>
      </div>
        
      <div>
        Some of My Projects:
      </div>
      <div className="card-container">
      {projects.map((project) => (
          <div className="card" key={project.id}>
            <img src={project.imageSrc} alt={project.title} className="card-image" />
            <h2 className="card-title">{project.title}</h2>
            <p className="card-content">{project.description}</p>
            <div className="card-buttons">
              <a href={project.demoLink} className="card-button">
                Demo
              </a>
              <a href={project.repoLink} className="card-button">
                Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
