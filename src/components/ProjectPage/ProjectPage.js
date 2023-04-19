import React from "react"
import "./ProjectPage.css"
// import { triangle } from "../../assets/triangle.svg"

const ProjectPage = ({ index, imageUrl, title, repoLink }) => {
   
    return (
     <div className="project-item">
        <p className="index">[/> {index}</p>
        <h6>░ ░ ░ {title} ░ ░ ░</h6>
        <a className="link-repo" href={repoLink}>
            Visit site 
        </a>
     </div>
    );
  };
  
  export default ProjectPage;