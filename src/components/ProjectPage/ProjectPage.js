import React from "react";
import "./ProjectPage.css";
import triangle from "./triangle.svg";

const ProjectPage = ({ index, imageUrl, title, repoLink }) => {
  return (
    <div className="project-item">
      <p className="index">[/> {index}</p>
      <h6>░ ░ ░ {title} ░ ░ ░</h6>
      <a className="link-repo" href={repoLink} target="_blank" rel="noreferrer">
        Visit site <span><img src={triangle} alt="Triangle icon" /> → </span>
      </a>
    </div>
  );
};

export default ProjectPage;