import React from "react"
import { projects } from "./data.js"
import "./Project.css"
import ProjectPage from "../ProjectPage/ProjectPage.js"

const Project = () => {
   console.log(projects);
    return (
     <div className="project-container">
        <h5>PROJECTS</h5>
        {projects.map((project, index) => (
       
       <ProjectPage
         key={index}
         index = {index + 1}
         title={project.title}
         imageUrl={project.image}
         repoLink={project.repoLink}
       />
      
     ))}
     </div>
     
    );
  };
  
  export default Project;