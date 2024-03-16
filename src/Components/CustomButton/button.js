import React from "react";
import "./button.css";

const ButtonCustom = ({ title }) => {
    return (
        <div className="button">
            <div className="title"> {title}</div>
        </div>
    );
};

export default ButtonCustom;
