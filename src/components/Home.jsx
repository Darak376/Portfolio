import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "./Home.css";
import avatarImage from "../images/Profile-av2.png";

const Home = () => {
  const typedElement = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Hi, I am Darak", "I am a Developer", "I build Solutions"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      backDelay: 1500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hero-section">
      {/* Navbar */}
      <nav className="nav-main">
        <div className="intro">DA</div>

        <ul className={`Navigation ${isMenuOpen ? "open" : ""}`}>
          <li className="Navigation-Button">
            <a href="#home">Home</a>
          </li>
          <li className="Navigation-Button">
            <a href="#about">About</a>
          </li>
          <li className="Navigation-Button">
            <a href="#skills">Skills</a>
          </li>
          <li className="Navigation-Button">
            <a href="#projects">Projects</a>
          </li>
          <li className="Navigation-Button">
            <a href="#contact">Contact</a>
          </li>
          <li className="Navigation-Button">
            <a href="/path-to-your-resume.pdf" target="_blank">
              Resume
            </a>
          </li>
        </ul>

        {/* Hamburger Menu for mobile */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      {/* Intro Section with Image and Text */}
      <div className="intro-section">
        {/* Left side: Image */}
        <img src={avatarImage} alt="Avatar" />

        {/* Right side: Intro text */}
        <div className="intro-content">
          <h2>
            {/* The element where the typing effect will happen */}
            <span ref={typedElement}></span>
          </h2>
          <p>
            I craft innovative, scalable solutions through code, merging
            creativity with cutting-edge technologies. Let's build exceptional
            digital experiences that make an impact together.
          </p>
          <button>Let's Work Together</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
