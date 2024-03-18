import React from "react";
import "./projectcomponent.css";

const ProjectComponent = ({ title, imgUrl, subtitle }) => {
    return (
        <div className="project-container">
            <div className="project-container-image">
                {imgUrl && (
                    <img src={imgUrl} alt="Project" className="project-container-imageurl" />
                )}
            </div>

            <div className="project-container-title">{title}</div>
            <div className="project-container-subtitle">{subtitle}</div>
        </div>
    );
};

export default ProjectComponent;
