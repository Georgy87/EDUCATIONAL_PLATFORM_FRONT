import React from "react";
import photoTeacher from "../../assets/photoTeacher/pexels-fauxels-3184647.jpg";
import "./TeacherRegistration.css";
const TeacherRegistration = () => {
    return (
        <div className="teacher-container">
            <div className="teacher-content">
                <div className="teacher-title">Станьте преподавателем</div>
                <div className="teacher-descr">Лучшие преподаватели со всего мира обучают миллионы студентов на Udemy. Мы даем вам средства преподавать то, что вы любите.</div>
                <button>Станьте преподавателем</button>
            </div>
            <img src={photoTeacher} alt="" />
        </div>
    );
};

export default TeacherRegistration;
