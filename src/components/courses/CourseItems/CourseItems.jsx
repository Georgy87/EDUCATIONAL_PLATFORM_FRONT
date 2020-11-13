import React from "react";
import "./CourseItems.css";
import { NavLink } from 'react-router-dom';

const CourseItems = ({ props }) => {
    console.log(props);
    return (
        <div>
            <div className="course-container">
                <NavLink to="/profile">
                    <div className="course-show">
                        <img src={`http://localhost:5000/${props.name}`} alt="" />
                    </div>
                </NavLink>
                <div className="course-descr">
                    <div className="course-title">{props.smallDescription}</div>
                    <div className="course-author">{props.author}</div>
                </div>
            </div>
           <div className="course-line"></div>
        </div>
    );
};

export default CourseItems;
