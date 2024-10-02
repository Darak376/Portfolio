import React from "react";
import techImage from "../images/big-tech.png";
import "./About.css";

const About = () => {
  return (
    <div className="About-info">
      <img src={techImage} alt="Avatar" />
      <div className="About-intro">
        <h1>About Me</h1>
        <p>
          I am a Developer with experience in building web applications using
          React, Node.js, and other modern technologies. I have a passion for
          learning and sharing my knowledge with others as publicly as possible.
        </p>
      </div>
    </div>
  );
};

export default About;
