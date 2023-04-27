import './Testimonials.css';
import React, { useEffect, useState } from "react";
import { testimonial } from './testimonial.js';
import QuotesPic from './quote.png';

const TESTIMONIAL_DELAY = 12000;

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % testimonial.length);
    }, TESTIMONIAL_DELAY);

    return () => clearInterval(intervalId);
  }, []);

  const currentTestimonial = testimonial[index];

  return (
    <div className="testimonials-box"> 
      <div className="quotes-box">
        <img src={QuotesPic} alt={"quotes"} />
      </div>
      <div className="testimonial-container">
        <p className="quote-text">{currentTestimonial.text}</p>
        <p className="author-p">{currentTestimonial.author}</p>
        <p className="role-p">{currentTestimonial.role}</p>
      </div> 
    </div>
  );
};

export default Testimonials;

