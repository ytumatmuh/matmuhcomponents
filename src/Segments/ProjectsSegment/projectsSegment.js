import './projectsSegment.css'
import ProjectService from "../../Services/projectService";
import React, { useState, useEffect } from "react";

const ProjectsComponent = ({ project }) => {
    const dateObject = new Date(project.date);

    // Tarihi GG/AA/YYYY formatına dönüştürme
    const formattedDate = dateObject.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });

    return (
       
            <div className="project-container" key={project.id}>
            <div className="project-container-image">
                {project.imageUrl && (
                    <img src={project.imageUrl} alt="Project" className="project-container-imageurl" />
                )}
            </div>
            <div className="project-container-title">{project.name}</div>
            <div className="project-container-subtitle">{project.description}</div>
            <div className="project-container-subtitle">{formattedDate}</div>
        </div>
        
        
    );
};



const ProjectsAll = () => {

    const [projects, setProjects] = useState([]);
      useEffect(() => {
      const fetchProjects = async () => {
        try {
          const data = await ProjectService();
          setProjects(data);
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      };
  
      fetchProjects();
    }, []);
    return (
        <div className='center-project'>
            <div className='project-service-all'>
        {projects.map((project) => (
          <ProjectsComponent key={project.id} project={project} />
        ))}
      </div>
        </div>
      
    );
  };
  
  export default ProjectsAll;
