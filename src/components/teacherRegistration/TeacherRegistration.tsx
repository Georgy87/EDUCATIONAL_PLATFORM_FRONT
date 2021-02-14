import React from "react";
import photoTeacher from "../../assets/photoTeacher/Снимок экрана 2020-12-22 в 01.25.47.png";
import { NavLink } from 'react-router-dom';

import "./TeacherRegistration.css";
import { Button } from "../button/Button";

const TeacherRegistration: React.FC = () => {
    return (
        <div>
            <div className="teacher-container">
                <div className="teacher-content">
                    <div className="teacher-title">Станьте преподавателем</div>
                    <div className="teacher-descr">Лучшие преподаватели со всего мира обучают миллионы студентов на нашей Платформе. Мы даем вам средства преподавать то, что вы любите.</div>
                    <NavLink to="/registration-teacher">
                        <Button typeStyle="teacher" type={undefined}>Станьте преподавателем</Button>
                    </NavLink>
                </div>
                <img src="https://images.unsplash.com/photo-1485871882310-4ecdab8a6f94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="" />
            </div>
        </div>
    );
};

export default TeacherRegistration;
