import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>My Tech Stack</h1>
      <p className="skills-description">
        A collection of languages, frameworks, and tools I've worked with over
        the years.
      </p>
      <div className="tech-grid">
        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="tech-logo"
          />
          <p>React</p>
        </div>
        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="tech-logo"
          />
          <p>JavaScript</p>
        </div>
        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="tech-logo"
          />
          <p>Node.js</p>
        </div>
        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
            className="tech-logo"
          />
          <p>CSS</p>
        </div>
        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML"
            className="tech-logo"
          />
          <p>HTML</p>
        </div>
        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            className="tech-logo"
          />
          <p>Python</p>
        </div>
        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            alt="C++"
            className="tech-logo"
          />
          <p>C++</p>
        </div>
        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            alt="Java"
            className="tech-logo"
          />
          <p>Java</p>
        </div>
        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
            alt="C#"
            className="tech-logo"
          />
          <p>C#</p>
        </div>
        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
            className="tech-logo"
          />
          <p>MongoDB</p>
        </div>
        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="SQL"
            className="tech-logo"
          />
          <p>SQL</p>
        </div>
        <div className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            alt="Figma"
            className="tech-logo"
          />
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
