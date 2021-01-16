import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeacherCourses, getCourseContent, uploadCourseContent } from "../../../store/ducks/contentCourses/saga";
import CoursePreview from "../coursePreview/CoursePreview";
import { uploadNewCourse } from "../../../store/ducks/courses/saga";
import { Button } from '@material-ui/core';
import { selectAllTeacherCourses } from "../../../store/ducks/contentCourses/selectors";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import "./CreateCourse.css";

export interface LoginFormProps {
    photoCourse: File;
    profession: string;
    author: string;
    price: string;
    shotDescription: string;
    fullDescription: string;
    fileVideo: File;
    module: string;
    lesson: string;
}

const RegisterFormSchema = yup.object().shape({
    photoCourse: yup.mixed().required('Добавьте фото к курсу'),
    profession: yup.string().required('Введите профессию'),
    author: yup.string().required('Введите автора'),
    price: yup.string().required('Введите цену'),
    shotDescription: yup.string().required('Введите введите название курса'),
    fullDescription: yup.string().required('Введите полное описание курса'),
    fileVideo: yup.mixed().required('Добавьте видео к лекции'),
    module: yup.string().required('Введите название модуля'),
    lesson: yup.string().required('Введите название лекции'),
});

const CreateCourse = () => {
    const allTeacherCourses = useSelector(selectAllTeacherCourses);

    const dispatch = useDispatch();

    const { register, handleSubmit, errors } = useForm<LoginFormProps>({
        resolver: yupResolver(RegisterFormSchema)
    });

    const onSubmit = (data: LoginFormProps) => {
        const { photoCourse, profession, author, price, shotDescription, fullDescription, module, fileVideo, lesson } = data;
        console.log(data);
        // dispatch(uploadNewCourse(photoCourse, profession, author, price, shotDescription, fullDescription, module, fileVideo, lesson));
    };

    // const [profession, setProfession] = useState<string>("");
    // const [author, setAuthor] = useState<string>("");
    // const [price, setPrice] = useState<string>("");
    // const [shotDescription, setShotDescription] = useState<string>("");
    // const [fullDescription, setFullDescription] = useState<string>("");
    // const [photoCourse, setFile] = useState<any>();
    const [module, setModule] = useState<string>("");
    const [fileVideo, setFileVideo] = useState<any>();
    const [lesson, setLesson] = useState<string>("");

    const [changeCourseId, setChangeCourseId] = useState<string | null>("");

    const onUploadAndGetContent = () => {
        dispatch(uploadCourseContent(changeCourseId, fileVideo, lesson, module));
    };

    useEffect(() => {
        dispatch(getAllTeacherCourses());
    }, []);

    const onChoiceCourse = (courseId: string) => {
        setChangeCourseId(courseId);
        localStorage.setItem("courseId", courseId);
        dispatch(getCourseContent(courseId));
    };

    // const onSetFilePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = (e.target as HTMLInputElement).files?.[0];
    //     setFile(file);
    // }

    const onSetFileVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        setFileVideo(file);
    }

    useEffect(() => {
        dispatch(getCourseContent(localStorage.getItem("courseId")));
        setChangeCourseId(localStorage.getItem("courseId"));
    }, [changeCourseId]);

    return (
        <div>
            <form className="teacher-course-add " onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="photoCourse"
                    type="file"
                    ref={register}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSetFilePhoto(e)}
                    className="custom-file-input"
                />
                <textarea
                    name="profession"
                    placeholder="Профессия"
                    ref={register}
                    // defaultValue={profession}
                    // onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setProfession((e.target.value))}
                />
                <textarea
                    name="author"
                    placeholder="Автор курса"
                    ref={register}
                    // defaultValue={author}
                    // onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAuthor(e.target.value)}
                />
                <textarea
                    name="price"
                    placeholder="Цена курса"
                    ref={register}
                    // defaultValue={price}
                    // onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrice(e.target.value)}
                />
                <textarea
                    name="shotDescription"
                    placeholder="Краткое описание"
                    ref={register}
                    // defaultValue={shotDescription}
                    // onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setShotDescription(e.target.value)}
                />
                <textarea
                    name="fullDescription"
                    placeholder="Полное описание"
                    ref={register}
                    // defaultValue={fullDescription}
                    // onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFullDescription(e.target.value)}
                />
                <div style={{ marginTop: "60px", marginBottom: "60px" }}>
                    * Добавьте первый модуль и вводную лекцию
                </div>
                <input
                    name="fileVideo"
                    type="file"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSetFileVideo(e)}
                    className="custom-file-input"
                    ref={register}
                />
                {/* <div style={{ marginTop: "10px" }}>
                    * Введите название модуля только в том случае, если он есть
                </div> */}
                <textarea
                    name="module"
                    placeholder="Название модуля"
                    defaultValue={module}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setModule(e.target.value)}
                    ref={register}
                />
                <textarea
                    name="lesson"
                    placeholder="Лекция"
                    // defaultValue={profession}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setLesson(e.target.value)}
                    ref={register}
                />
                <Button onClick={onUploadAndGetContent}>
                    Добавить контент к курсу
                </Button>
                <Button
                    // disabled={!photoCourse || !profession || !author || !price || !shotDescription || !fullDescription || !module || !fileVideo || !lesson}
                    // onClick={() => dispatch(uploadNewCourse(photoCourse, profession, author, price, shotDescription, fullDescription, module, fileVideo, lesson))}
                    type="submit"
                >
                    Создать курс
                </Button>
                <div className="teacher-course-choice">
                    <h1>Выберите курс</h1>
                    <div className="teacher-course-choice-items">
                        {allTeacherCourses.map((course) => {
                            return (
                                <div key={course._id} className="teacher-course-choice-item">
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
            </form>
            <CoursePreview changeCourseId={changeCourseId} />
        </div>
    );
};

export default CreateCourse;
