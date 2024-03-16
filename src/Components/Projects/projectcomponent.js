import React from "react";
import "./projectcomponent.css";

const ProjectComponent = ({ title, imgUrl, subtitle }) => {
    return (
        <div className="container">
            <div className="container-image">
                {imgUrl && (
                    <img src={imgUrl} alt="Project" className="container-imageurl" />
                )}
            </div>

            <div className="container-title">{title}</div>
            <div className="container-subtitle">{subtitle}</div>
        </div>
    );
};

export default ProjectComponent;
