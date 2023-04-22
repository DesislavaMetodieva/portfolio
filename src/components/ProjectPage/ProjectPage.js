import React from "react";
import "./ProjectPage.css";
import triangle from "./triangle.svg";
import { projects } from "./data.js"

const ProjectPage = () => {
  const listingProjects = projects.map ((project) => (
    <div className="project-container" key={project.id}>
      <div className="project-box">
        <p className="index">[/></p>
        <p className="project-listing">{project.id}</p>
        <h6>░ ░ ░ {project.title} ░ ░ ░</h6>
        <a className="link-repo" href={project.repoLink} target="_blank" rel="noreferrer">
          Visit site <span><img src={triangle} alt="Triangle icon" /> → </span>
        </a>
      </div>  
    </div> 
  ))
  return (
    <div>
      {listingProjects}
    </div>

   
  );
};

export default ProjectPage;

