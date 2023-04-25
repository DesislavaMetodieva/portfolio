import React from "react";
import './Hero.css'
import ProfilePicture from './desi.jpg'

const Hero = () => {
    return (
         <><section className="titles">
        <div className="titles-items">
          <h2>DESI_</h2>
          <h2>__METODIEVA</h2>
          <h3>/ WEB DEVELOPER</h3>
          <p className="bio">As a web developer, I specialize in building websites and web applications using various programming languages and frameworks. I am skilled in creating responsive designs, optimizing website performance, and integrating APIs. My focus is on creating visually appealing and user-friendly websites that provide an excellent user experience.</p>
          <h4>/ LONDON UK ↓</h4>
        </div>
        <div className="hero-image">
          <img src={ProfilePicture} alt={"desi-author-face"} />
        </div>
      </section>
          <hr />
       </>
         
    );
  };
  
  export default Hero;