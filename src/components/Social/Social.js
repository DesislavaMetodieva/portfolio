import React from "react";
import './Social.css'
import Link from '@mui/joy/Link'
import GitHub from './github.svg'
// import LinkedIn from './linkedin.svg'
// import Twitter from './twitter.svg'

const Social = () => {
    return (
        
    <div className="social-container">
        <div>
       </div>  
       <Link href="https://github.com/DesislavaMetodieva" target="_blank" rel="noopener" >
          <img src={GitHub} alt={GitHub} />
        </Link>
         
    </div>
       
    );
  };
  
  export default Social;