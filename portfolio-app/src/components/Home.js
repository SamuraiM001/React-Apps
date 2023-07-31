  import React from 'react';
  import { Link } from 'react-router-dom';
  import './home.css'; // Import the home.css file for card styles

  const Home = () => {
      const projects = [
          {
            id: 1,
            title: "ChoryApp ",
            description: "This app is chat+stroy app.I named it ChoryApp",
            demoLink: "https://github.com/SamuraiM001/Mobile-Applications/tree/main/ReactNative/ChatApp",
            repoLink: "https://github.com/SamuraiM001/Mobile-Applications/tree/main/ReactNative/ChatApp",
            imageSrc: "https://m.media-amazon.com/images/I/71vGInRDuZL.png",
          },
          {
            id: 2,
            title: "CMob",
            description: "Mobile App for compiling c and c++ code",
            demoLink: "https://github.com/SamuraiM001/Mobile-Applications/tree/main/ReactNative/CMob",
            repoLink: "https://github.com/SamuraiM001/Mobile-Applications/tree/main/ReactNative/CMob",
            imageSrc: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
          },
          {
            id: 3,
            title: "School Examing",
            description: "This is site where you can can upload exams as teacher, and your students can solve them",
            demoLink: "https://github.com/SamuraiM001/React-Apps/tree/main/reactapp",
            repoLink: "https://github.com/SamuraiM001/React-Apps/tree/main/reactapp",
            imageSrc: "https://intake.education/sites/default/files/styles/convert_webp/public/2022-07/exam-2020.jpg.webp?itok=HjHVOw8X",
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
                <a target='_blank' href={project.demoLink} className="card-button">
                  Demo
                </a>
                <a target='_blank' href={project.repoLink} className="card-button">
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
