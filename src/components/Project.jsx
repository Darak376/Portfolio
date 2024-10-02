import React, { useState } from "react";
import "./Projects.css";

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Web Development Project",
    image: "https://via.placeholder.com/400", // Replace with actual image URL
    description: "A web development project using React and Node.js.",
    website: "https://example.com",
    technologies: ["React", "Node.js", "CSS"],
    category: "Web Development",
  },
  {
    id: 2,
    title: "Mobile App Project",
    image: "https://via.placeholder.com/400", // Replace with actual image URL
    description: "A mobile app built with React Native.",
    website: "https://example.com",
    technologies: ["React Native", "Firebase", "CSS"],
    category: "Mobile App",
  },
  {
    id: 3,
    title: "E-commerce Project",
    image: "https://via.placeholder.com/400", // Replace with actual image URL
    description: "An e-commerce website using MongoDB and Express.",
    website: "https://example.com",
    technologies: ["MongoDB", "Express", "JavaScript"],
    category: "E-commerce",
  },
  {
    id: 4,
    title: "Portfolio Project",
    image: "https://via.placeholder.com/400", // Replace with actual image URL
    description: "My personal developer portfolio built with React.",
    website: "https://example.com",
    technologies: ["React", "HTML", "CSS"],
    category: "Portfolio",
  },
  // Add more projects...
];

// Function to dynamically import tech logos
const getTechLogo = (techName) => {
  const techLogos = {
    React: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "Node.js":
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    CSS: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    "React Native":
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    Firebase:
      "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
    MongoDB: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg",
    Express:
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    // Add more logos as needed...
  };
  return techLogos[techName];
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "Mobile App",
    "E-commerce",
    "Portfolio",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <div className="projects-container">
      <h1>Projects</h1>

      {/* Menu for filtering projects */}
      <div className="projects-menu">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? "active" : ""}
          >
            {category} (
            {
              projectsData.filter(
                (p) => category === "All" || p.category === category
              ).length
            }
            )
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Visit Website
            </a>

            {/* Technologies Used */}
            <div className="project-tech">
              {project.technologies.map((tech) => (
                <img
                  key={tech}
                  src={getTechLogo(tech)}
                  alt={tech}
                  className="tech-logo"
                  title={tech}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
