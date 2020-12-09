import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadNewCourse } from "../../../actions/courses";
import {
    getAllTeacherCourses,
    getCourseContent,
    uploadCourseContent,
} from "../../../actions/contentCourses";
import "./CreateCourse.css";
import CoursePreview from "../coursePreview/CoursePreview";

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
    const [changeCourseId, setChangeCourseId] = useState("");

    const course = useSelector((state) => state.course.courses);

    const contentCourses = useSelector((state) => state.contentCourses);

    const onUploadAndGetContent = () => {
        // const courseId = course[0]._id;
        dispatch(
            uploadCourseContent(changeCourseId, fileVideo, lesson, module)
        );
    };

    useEffect(() => {
        dispatch(getAllTeacherCourses());
    }, []);

    const onChoiceCourse = (courseId) => {
        setChangeCourseId(courseId);
        dispatch(getCourseContent(courseId));
        // localStorage.setItem("courseId", courseId);
    };

    // useEffect(() => {
    //     dispatch(getCourseContent(localStorage.getItem("courseId")));
    // }, [localStorage.getItem("courseId")]);

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
                <div className="teacher-course-choice">
                    <h1>Выберите курс</h1>
                    <div>
                        {contentCourses &&
                            contentCourses.allTeacherCourses.map((course) => {
                                return (
                                    <div>
                                        <div
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                onChoiceCourse(course._id)
                                            }
                                        >{`Курс: ${course.smallDescription}`}</div>

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
