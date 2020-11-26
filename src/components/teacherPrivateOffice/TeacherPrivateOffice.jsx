import React from "react";
import { useState, useEffect } from "react";
import {
    getTeacherCourses,
    uploadCourseContent,
    uploadNewCourse,
} from "../../actions/teacherCourses";
import { useDispatch, useSelector } from "react-redux";
import { MediaPlayer } from "../courseVideoPleer/CourseVideoPleer";
import { setVideoName } from "../../reducers/teacherCoursesReducer";

import "./TeacherPrivateOffice.css";

const TeacherPrivateOffice = () => {
    const dispatch = useDispatch();
    const [photoCourse, setFile] = useState("");
    const [profession, setProfession] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [shotDescription, setShotDescription] = useState("");
    const [fullDescription, setFullDescription] = useState("");
    const [module, setModule] = useState("");

    const [fileVideo, setFileVideo] = useState("");
    const [lesson, setLesson] = useState("");

    const contentCourse = useSelector(
        (state) => state.teacherCourses.courseContent
    );
    const lessons = useSelector((state) => state.teacherCourses.courseContent);
    const videoName = useSelector((state) => state.teacherCourses.videoName);

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
                            onChange={(e) => setFile(e.target.files[0])}
                            className="custom-file-input"
                        />
                        <textarea
                            placeholder="Профессия"
                            type="text"
                            defaultValue={profession}
                            onChange={(e) => setProfession(e.target.value)}
                        />
                        <textarea
                            placeholder="Автор курса"
                            type="text"
                            defaultValue={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                        <textarea
                            placeholder="Цена курса"
                            type="text"
                            defaultValue={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <textarea
                            placeholder="Краткое описание"
                            type="text"
                            defaultValue={shotDescription}
                            onChange={(e) => setShotDescription(e.target.value)}
                        />
                        <textarea
                            placeholder="Полное описание"
                            type="text"
                            defaultValue={fullDescription}
                            onChange={(e) => setFullDescription(e.target.value)}
                        />
                        {/* <div  style={{marginTop: '10px'}}>
                            * Введите название модуля только в том случае, если он
                            есть
                        </div>
                        <textarea
                            placeholder="Название модуля"
                            type="text"
                            defaultValue={module}
                            onChange={(e) => setModule(e.target.value)}
                        />
                        <textarea
                            placeholder="Лекция"
                            type="text"
                            defaultValue={profession}
                            onChange={(e) => setLesson(e.target.value)}
                        /> */}
                        <button
                            onClick={() =>
                                dispatch(
                                    uploadNewCourse(
                                        photoCourse,
                                        profession,
                                        author,
                                        price,
                                        shotDescription,
                                        fullDescription,
                                        module,
                                        fileVideo,
                                        lesson
                                    )
                                )
                            }
                        >
                            Создать курс
                        </button>

                        <div
                            style={{ marginTop: "60px", marginBottom: "60px" }}
                        >
                            Добавление уроков и видео к ним
                        </div>
                        <input
                            type="file"
                            onChange={(e) => setFileVideo(e.target.files[0])}
                            className="custom-file-input"
                        />
                        <div style={{ marginTop: "10px" }}>
                            * Введите название модуля только в том случае, если
                            он есть
                        </div>
                        <textarea
                            placeholder="Название модуля"
                            type="text"
                            defaultValue={module}
                            onChange={(e) => setModule(e.target.value)}
                        />
                        <textarea
                            placeholder="Лекция"
                            type="text"
                            defaultValue={profession}
                            onChange={(e) => setLesson(e.target.value)}
                        />
                        <button
                            onClick={() =>
                                dispatch(
                                    uploadCourseContent(
                                        module,
                                        fileVideo,
                                        lesson
                                    )
                                )
                            }
                        >
                            Добавить контент к курсу
                        </button>
                    </div>

                    <div className="teacher-course-preview">
                        <MediaPlayer videoName={videoName} />
                        <div className="teacher-course-list">
                            {contentCourse &&
                                lessons.content.map((el) => {
                                    console.log(el.module);
                                    return (
                                        <div>
                                            <div>{el.module}</div>
                                            <div
                                                onClick={() =>
                                                    dispatch(
                                                        setVideoName(
                                                            el.fileVideo
                                                        )
                                                    )
                                                }
                                            >
                                                <div>{el.lesson}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherPrivateOffice;
