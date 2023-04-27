import './Testimonials.css';
import React, { useEffect, userRef, useState } from "react";
// import { data } from './testimonial.json';
import QuotesPic from './quote.png';



const Testimonials = () => {
    return (
      <div>
        <div className="testimonials-box"> 
        <div className="quotes-box">
          <img src={QuotesPic} alt={"quotes"} />
        </div>
        </div>
          
       </div>
       
    );
  };
  
  export default Testimonials;