import React from "react"
import { projects } from "./data.js"
import "./Project.css"
// import ProjectPage from "../ProjectPage/ProjectPage.js"

const Project = () => {
   console.log(projects);
    return (
      <div className="project-title">
         <h5>PROJECTS</h5>
      </div>
    );
  };
  
  export default Project;