import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa"; // Import star icon from react-icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css"; // Import custom CSS

const testimonials = [
  {
    name: "Emily Carter",
    text: "Darak's ability to solve complex problems and implement secure code is outstanding. Highly recommend his development services!",
  },
  {
    name: "Michael Lee",
    text: "The web application Darak developed for us exceeded all expectations. His efficiency and attention to detail are remarkable.",
  },
  {
    name: "Sophia Patel",
    text: "Working with Darak was a pleasure! He built a seamless API integration that improved our system's performance drastically.",
  },
  {
    name: "David Nguyen",
    text: "Darak is a highly skilled developer who helped us set up our cloud infrastructure. His knowledge and dedication are top-tier!",
  },
  {
    name: "Rachel Adams",
    text: "Darak transformed our web presence with his innovative design and clean code. Would love to work with him again!",
  },
  {
    name: "John Miller",
    text: "Highly recommend Darak for any development projects! His ability to deliver quality code on time is truly impressive.",
  },
  {
    name: "Sarah Johnson",
    text: "Darak's technical expertise helped streamline our software project. His problem-solving skills are unmatched.",
  },
  {
    name: "Chris Evans",
    text: "Fantastic developer! Darak's work on our e-commerce platform was efficient and delivered ahead of schedule.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Constant movement
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200, // For large screens (1200px and below)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // For medium screens (992px and below)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For tablets and smaller screens (768px and below)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-wrapper">
      <div className="testimonials-container">
        <h2 className="title">What Clients Say About Darak</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h3 className="testimonial-author">- {testimonial.name}</h3>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color="#c90000" />
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
