import React from "react";
import "./CourseItems.css";

const CourseItems = ({ props }) => {
    console.log(props);
    return (
        <div className="course-container">
            <div className="course-show">
                <img src={`http://localhost:5000/${props.name}`} alt="" />
            </div>
            <div className="course-descr">
                <div className="course-title">{props.smallDescription}</div>
            </div>
        </div>
    );
};

export default CourseItems;
