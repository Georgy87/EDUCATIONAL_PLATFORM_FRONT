import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeacherCourses, getCourseContent, uploadCourseContent } from "../../../store/ducks/contentCourses/saga";
import CoursePreview from "../coursePreview/CoursePreview";
import { uploadNewCourse } from "../../../store/ducks/courses/saga";

import "./CreateCourse.css";
import { Button } from '@material-ui/core';

const CreateCourse = () => {
    const [profession, setProfession] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [shotDescription, setShotDescription] = useState("");
    const [fullDescription, setFullDescription] = useState("");
    const [photoCourse, setFile] = useState("");

    const dispatch = useDispatch();

    const [module, setModule] = useState("");
    const [fileVideo, setFileVideo] = useState("");
    const [lesson, setLesson] = useState("");
    const contentCourses = useSelector((state) => state.contentCourses);
    const [changeCourseId, setChangeCourseId] = useState("");

    const onUploadAndGetContent = () => {
        dispatch(
            uploadCourseContent(changeCourseId, fileVideo, lesson, module)
        );
    };

    useEffect(() => {
        dispatch(getAllTeacherCourses());
    }, []);

    const onChoiceCourse = (courseId) => {
        setChangeCourseId(courseId);
        localStorage.setItem("courseId", courseId);
        dispatch(getCourseContent(courseId));
    };

    useEffect(() => {
        dispatch(getCourseContent(localStorage.getItem("courseId")));
        setChangeCourseId(localStorage.getItem("courseId"));
    }, [changeCourseId]);

    return (
        <div>
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
                <div style={{ marginTop: "60px", marginBottom: "60px" }}>
                    Добавление уроков и видео к ним
                </div>
                <input
                    type="file"
                    onChange={(e) => setFileVideo(e.target.files[0])}
                    className="custom-file-input"
                />
                <div style={{ marginTop: "10px" }}>
                    * Введите название модуля только в том случае, если он есть
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
                <button onClick={onUploadAndGetContent}>
                    Добавить контент к курсу
                </button>
                <Button
                    disabled={!photoCourse || !profession || !author || !price || !shotDescription || !fullDescription || !module || !fileVideo ||!lesson}
                    onClick={() => dispatch(uploadNewCourse(photoCourse, profession, author, price, shotDescription, fullDescription, module, fileVideo, lesson))}
                >
                    Создать курс
                </Button>
                <div className="teacher-course-choice">
                    <h1>Выберите курс</h1>
                    <div className="teacher-course-choice-items">
                        {contentCourses &&
                            contentCourses.allTeacherCourses.map((course) => {
                                return (
                                    <div className="teacher-course-choice-item">
                                        <img src={`http://localhost:5000/${course.photo}`} />
                                        <p
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                onChoiceCourse(course._id)
                                            }
                                        >{`Курс: ${course.smallDescription}`}
                                        </p>

                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
            <CoursePreview changeCourseId={changeCourseId} />
        </div>
    );
};

export default CreateCourse;
