import React from "react";
import './Hero.css'
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
    return (
         <section className="titles">
            <div>
                <h2>DESI_</h2>
                <h2>__METODIEVA</h2>
            </div>
                <h3>/ WEB DEVELOPER</h3>
                <h4>/ LONDON UK <FaArrowDown className="arrow-icon"/></h4>
        </section>
    );
  };
  
  export default Hero;