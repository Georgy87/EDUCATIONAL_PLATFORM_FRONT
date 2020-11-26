import React from "react";
import { useState, useEffect } from "react";
import {
    getTeacherCourses,
    uploadCourseContent,
} from "../../actions/teacherCourses";
import { useDispatch } from "react-redux";

import "./TeacherPrivateOffice.css";
import { MediaPlayer } from '../courseVideoPleer/CourseVideoPleer';


const TeacherPrivateOffice = () => {
    const [fileVideo, setFileVideo] = useState("");
    const [lesson, setLesson] = useState("");

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTeacherCourses());
    }, []);

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
                    <div className="teacher-course-add ">
                        <input
                            type="file"
                            onChange={(e) => setFileVideo(e.target.files[0])}
                            className="custom-file-input"
                        />
                        <textarea
                            placeholder="Лекция"
                            type="text"
                            // defaultValue={profession}
                            onChange={(e) => setLesson(e.target.value)}
                        />
                        <button
                            onClick={() =>
                                dispatch(uploadCourseContent(fileVideo, lesson))
                            }
                        >
                            Создать курс
                        </button>
                    </div>

                </div>

            </div>
            <MediaPlayer />
        </div>
    );
};

export default TeacherPrivateOffice;
