import React from "react";
import CreateCourse from "./createCourse/CreateCourse";

import "./TeacherPrivateOffice.css";

const TeacherPrivateOfficeAdmin = () => {
    
    return (
        <div>
            <div className="teacher-office-container">
                <div className="teacher-office-navbar">
                    <span>Создание содержания курса</span>
                    <ul>
                        <li>Учебный план</li>
                    </ul>
                </div>
                <div className="teacher-office-content">
                    <CreateCourse />
                </div>
            </div>
        </div>
    );
};

export default TeacherPrivateOfficeAdmin;
