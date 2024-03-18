import React from "react";
import "./researches.css";

const ResearchComponent = ({ title, subtitle }) => {
    return (
        <div className="research-card">
            <div className="research-card-title "> {title}</div>
            <div className="research-card-description">{subtitle}</div>
        </div>
    );
};

export default ResearchComponent;
