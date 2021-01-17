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

import { CreateCourseSchema } from "../../../utils/FormSchemas";

import "./CreateCourse.css";
import { CreateModule } from "./createModule/CreateModule";

export interface CreateCourseFormProps {
    photoCourse: File[];
    profession: string;
    author: string;
    price: string;
    shotDescription: string;
    fullDescription: string;
    fileVideo: File[];
    module: string;
    lesson: string;
}

const CreateCourse = () => {
    const allTeacherCourses = useSelector(selectAllTeacherCourses);

    const [errorPhotoCourse, setErrorPhotoCourse] = React.useState<string>('');
    const [errorVideoCourse, setErrorVideoCourse] = React.useState<string>('');

    const dispatch = useDispatch();

    const schema = CreateCourseSchema(setErrorPhotoCourse, setErrorVideoCourse);

    const { register, handleSubmit, errors } = useForm<CreateCourseFormProps>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: CreateCourseFormProps) => {
        const { photoCourse, profession, author, price, shotDescription, fullDescription, module, fileVideo, lesson } = data;
        dispatch(uploadNewCourse(photoCourse[0], profession, author, price, shotDescription, fullDescription, module, fileVideo[0], lesson));
    };

    const [changeCourseId, setChangeCourseId] = useState("");

    useEffect(() => {
        dispatch(getAllTeacherCourses());
    }, []);

    const onChoiceCourse = (courseId: any) => {
        setChangeCourseId(courseId);
        localStorage.setItem("courseId", courseId);
        dispatch(getCourseContent(courseId));
    };

    // const onSetFileVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = (e.target as HTMLInputElement).files?.[0];
    //     setFileVideo(file);
    // }

    useEffect(() => {
        //@ts-ignore
        dispatch(getCourseContent(localStorage.getItem("courseId")));
        //@ts-ignore
        setChangeCourseId(localStorage.getItem("courseId"));
    }, [changeCourseId]);

    return (
        <div>
            <form className="teacher-course-add " onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="photoCourse"
                    type="file"
                    ref={register}
                    className="custom-file-input"
                />
                <p>{errorPhotoCourse}</p>

                <textarea
                    name="profession"
                    placeholder="Профессия"
                    ref={register}
                />
                <p>{errors.profession?.message}</p>

                <textarea
                    name="author"
                    placeholder="Автор курса"
                    ref={register}
                />
                <p>{errors.author?.message}</p>

                <textarea
                    name="price"
                    placeholder="Цена курса"
                    ref={register}
                />
                <p>{errors.price?.message}</p>

                <textarea
                    name="shotDescription"
                    placeholder="Краткое описание"
                    ref={register}
                />
                <p>{errors.shotDescription?.message}</p>

                <textarea
                    name="fullDescription"
                    placeholder="Полное описание"
                    ref={register}
                />
                <p>{errors.fullDescription?.message}</p>

                <div style={{ marginTop: "60px", marginBottom: "60px" }}>
                    * Добавьте первый модуль и вводную лекцию
                </div>

                <input
                    name="fileVideo"
                    type="file"
                    className="custom-file-input"
                    ref={register}
                />
                <p>{errorVideoCourse}</p>

                <textarea
                    name="module"
                    placeholder="Название модуля"
                    ref={register}
                />
                <p>{errors.module?.message}</p>

                <textarea
                    name="lesson"
                    placeholder="Лекция"
                    ref={register}
                />
                <p>{errors.lesson?.message}</p>

                <Button type="submit">Создать курс</Button>

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
            <CreateModule changeCourseId={changeCourseId}/>
        </div>
    );
};

export default CreateCourse;
