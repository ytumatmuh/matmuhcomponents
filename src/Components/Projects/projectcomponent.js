import React, { useState, useEffect } from "react";
import { getProjects } from "../../Services/projectService";
import "./projectcomponent.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data.slice(0, 3)); // Sadece en son 3 projeyi göster
    };

    fetchProjects();
  }, []);

  const truncateText = (html, maxLength) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    const textContent = tempElement.textContent || tempElement.innerText || "";
    return textContent.length > maxLength
      ? `${textContent.slice(0, maxLength)}...`
      : textContent;
  };

  return (
    <div className="projects-section">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-image-wrapper">
            {project.coverImageUrl ? (
              <img
                src={project.coverImageUrl}
                alt={project.name}
                className="project-image"
              />
            ) : (
              <div className="project-image-placeholder"></div>
            )}
          </div>
          <h3 className="project-title">{project.name}</h3>
          <p className="project-description">
            {truncateText(project.description, 100)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
