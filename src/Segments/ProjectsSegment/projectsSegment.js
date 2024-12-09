import React, { useState, useEffect } from "react";
import { getProjects } from "../../Services/projectService";
import "./projectsSegment.css";
import { useTranslation } from "react-i18next";

const ProjectsComponent = ({ project }) => {
  const formattedDate = new Date(project.date).toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  
  const stripHTML = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={project.name} className="project-image" />
        ) : (
          <div className="project-image-placeholder"></div>
        )}
      </div>
      <h3 className="project-title">{project.name}</h3>
      <p className="project-description">{stripHTML(project.description)}</p>
      <p className="project-date">{formattedDate}</p>
    </div>
  );
};

const ProjectsAll = () => {
  const [projects, setProjects] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projectsall-cont">
      <h1>{t("project")}</h1>
      <div className="projects-section">
      {projects.map((project) => (
        <ProjectsComponent key={project.id} project={project} />
      ))}
    </div>
    </div>
    
  );
};

export default ProjectsAll;
