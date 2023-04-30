import React from "react";
import "./ProjectPage.css";
import triangle from "./triangle.svg";
import { projects } from "./data.js"

const ProjectPage = () => {
  const listingProjects = projects.map ((project) => (
    <div className="project-container" key={project.id}>
      <p className="index-sign">[/></p>
        <div className="project-box">
          <p className="project-index">{project.id + 1}</p>
          <p className="title"><span className="shaded-block">░ ░ ░</span> {project.title} <span className="shaded-block">░ ░ ░</span></p>
          <a className="link-repo" href={project.repoLink} target="_blank" rel="noreferrer">
            Visit site <span><img src={triangle} alt="Triangle icon" /> → </span>
          </a> 
        </div> 
        <hr /> 
    </div> 
  ))
  return (
    <div>
      {listingProjects}
    </div>

   
  );
};

export default ProjectPage;

