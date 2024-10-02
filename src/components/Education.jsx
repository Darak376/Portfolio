import React from "react";
import "./Timeline.css";
import figureImage from "../images/Profile-av2.png"; // Update with your actual image path

const Education = () => {
  return (
    <div className="education-work-container">
      <h1 className="main-section-title">Education & Work</h1>
      <div className="education-work-section">
        <div className="image-container">
          <img src={figureImage} alt="3D Figure" />
        </div>

        <div className="info-section">
          {/* Education Section */}
          <div className="timeline-item">
            <h2 className="section-title">Education</h2>
            <div className="education-item">
              <h3>Southern Alberta Institute of Technology, Calgary</h3>
              <p className="degree">Diploma in Software Development</p>
              <p className="date">January 2023 - August 2024</p>
            </div>
          </div>

          {/* Work Section */}
          <div className="timeline-item">
            <h2 className="section-title">Work Experience</h2>
            <div className="work-item">
              <h3>Software Developer</h3>
              <p className="company">SLU.Ltd, Location</p>
              <p className="date">May 2022 - August 2022</p>
              <ul>
                <li>
                  Worked on a team of developers to create a new web application
                </li>
                <li>
                  Collaborated with the design team to create a user-friendly
                  interface
                </li>
                <li>
                  Wrote clean, maintainable code using modern technologies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
