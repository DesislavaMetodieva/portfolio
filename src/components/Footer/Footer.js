import React from "react";
import './Footer.css';

const Footer = () => {
  const now = new Date();
  let theYear = now.getFullYear();

  if (theYear < 1900) {
    theYear = theYear + 1900;
  }
  
  return (
    <div className="footer">
     © Copyright {theYear} | Made in rainy London
    </div>
  )
  };
  
  export default Footer;