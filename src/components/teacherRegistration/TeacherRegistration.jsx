import React from "react";
import photoTeacher from "../../assets/photoTeacher/Снимок экрана 2020-12-22 в 01.25.47.png";
import "./TeacherRegistration.css";
import { NavLink } from 'react-router-dom';
const TeacherRegistration = () => {
    return (
        <div>
            <div className="teacher-container">
                <div className="teacher-content">
                    <div className="teacher-title">Станьте преподавателем</div>
                    <div className="teacher-descr">Лучшие преподаватели со всего мира обучают миллионы студентов на нашей Платформе. Мы даем вам средства преподавать то, что вы любите.</div>
                    <NavLink to="/registration-teacher">
                        <button>Станьте преподавателем</button>
                    </NavLink>
                </div>
                <img src={photoTeacher} alt="" />
            </div>
        </div>
    );
};

export default TeacherRegistration;
