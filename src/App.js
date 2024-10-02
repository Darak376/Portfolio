import React, { useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.1, // Element appears when 10% is in view
      }
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="App">
      <Home />
      <div id="about" className="hidden">
        <About />
      </div>
      <div id="skills" className="hidden">
        <Skills />
      </div>
      <div id="projects" className="hidden">
        <Projects />
      </div>
      <div id="contact" className="hidden">
        <Contact />
      </div>
    </div>
  );
}

export default App;
