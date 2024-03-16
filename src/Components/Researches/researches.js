import React from "react";
import "./researches.css";

const ResearchComponent = ({ title, subtitle }) => {
    return (
        <div className="card">
            <div className="card-title "> {title}</div>
            <div className="card-description">{subtitle}</div>
        </div>
    );
};

export default ResearchComponent;
