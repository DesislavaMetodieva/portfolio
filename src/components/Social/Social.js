import React from "react";
import './Social.css'
import Link from '@mui/joy/Link'
import GitHub from './github.svg'
import LinkedIn from './linkedin.svg'
import Twitter from './twitter.svg'

const Social = () => {
    return (
      <div>
        <div className="social-container"> 
          <Link href="https://github.com/DesislavaMetodieva" target="_blank" rel="noopener" >
              <img src={GitHub} alt={GitHub} />
              <span className="social-link">DesislavaMetodieva</span>
          </Link>
          <Link href="https://www.linkedin.com/in/desim/" target="_blank" rel="noopener" >
              <img src={LinkedIn} alt={LinkedIn} />
              <span className="social-link">desim</span>
          </Link>
          <Link href="https://twitter.com/DesislavaMetod5" target="_blank" rel="noopener" >
              <img src={Twitter} alt={Twitter} />
              <span className="social-link">DesislavaMetod5</span>
          </Link>
        </div>
          <hr className="half-line" />
       </div>
       
    );
  };
  
  export default Social;