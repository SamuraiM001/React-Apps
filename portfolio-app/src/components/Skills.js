import React from 'react';
import './Skills.css';

const Skills = () => {
  // Sample skills data
  const skills = [
    {
      id: 1,
      name: "FrontEnd Development",
    },
    {
      id: 2,
      name: "BackEnd Development",
    },
 
    // Add more skills as needed
  ];
  const languages = [
    {
      id: 1,
      name: "Node JS",
    },
    {
      id: 2,
      name: "React",
    },
    {
      id: 3,
      name: "Express JS",
    },
    {
      id: 4,
      name: "React Native",
    },
    {
      id: 4,
      name: "HTML CSS JS",
    },
  ]

  return (
    <div>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-badge" key={skill.id}>

            <p className="skill-badge-name">{skill.name}</p>
          </div>
        ))}
      </div>
        <h2 className="skills-title">Programming Languages And Frameworks</h2>
      <div className="skills-container">
        {languages.map((languages) => (
          <div className="skill-badge" key={languages.id}>
            <p className="skill-badge-name">{languages.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
