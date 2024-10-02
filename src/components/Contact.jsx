import React, { useRef } from "react";
import figureImage from "../images/Profile-av2.png";
//import emailjs from "emailjs-com"; // Added EmailJS import
import "./Contact.css"; // Include your current CSS file

const Contact = () => {
  const form = useRef();

  // EmailJS submit function
  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
  //         "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
  //         form.current,
  //         "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //           alert("Message sent successfully!");
  //         },
  //         (error) => {
  //           console.log(error.text);
  //           alert("Failed to send message. Please try again.");
  //         }
  //       );
  //   };

  return (
    <div className="contact-container">
      {/* Resume and Introduction Section */}
      <div className="intro-resume-section">
        {/* Intro Sentence */}
        <div className="intro-sentence">
          <p>
            Ready to take the next step? Let's connect and discuss how I can
            help you build your next project!
          </p>
        </div>

        {/* Resume Link on the right */}
        <div className="resume-link">
          <a
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            View My Resume
          </a>
        </div>
      </div>

      {/* Contact Form Title */}
      <h1 className="contact-title">Contact Me</h1>

      {/* Contact Content */}
      <div className="contact-content">
        {/* Left side image */}
        <div className="contact-image">
          <img src={figureImage} alt="3D Figure" />
        </div>

        {/* Form */}
        <div className="contact-form-section">
          <h2>Let’s talk</h2>
          <p>
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>
          <form ref={form}>
            {" "}
            {/*//</div>onSubmit={sendEmail}>*/}
            <input
              type="text"
              name="user_name"
              placeholder="Full name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email address"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit">Send message →</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <hr />
        <div className="footer-social">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> {/* GitHub icon */}
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
          </a>
          <a
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i> {/* Instagram icon */}
          </a>
          <a
            href="https://facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i> {/* Facebook icon */}
          </a>
        </div>
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
