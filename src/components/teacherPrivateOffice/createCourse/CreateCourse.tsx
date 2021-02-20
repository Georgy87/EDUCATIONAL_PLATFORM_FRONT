import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllTeacherCourses } from "../../../store/ducks/contentCourses/actions";
import CoursePreview from "../coursePreview/CoursePreview";
import { fetchUploadNewCourse } from "../../../store/ducks/courses/actions";
import { Button } from '../../button/Button';
import { selectAllTeacherCourses } from "../../../store/ducks/contentCourses/selectors";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
//@ts-ignore
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
//@ts-ignore
import { CKEditor } from "@ckeditor/ckeditor5-react";

import { CreateCourseSchema } from "../../../utils/FormSchemas";

import "./CreateCourse.css";
import { CreateModule } from "./createModule/CreateModule";
import { fetchGetCourseContent } from "../../../store/ducks/contentCourses/actions";

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
    const [fullDescription, setFullDescription] = useState<string>("");
    
    const dispatch = useDispatch();

    const schema = CreateCourseSchema(setErrorPhotoCourse, setErrorVideoCourse);

    const { register, handleSubmit, errors } = useForm<CreateCourseFormProps>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: CreateCourseFormProps) => {
        const { photoCourse, profession, author, price, shotDescription, module, fileVideo, lesson } = data;

        dispatch(fetchUploadNewCourse({ photoCourse: photoCourse[0], profession, author, price, shotDescription, fullDescription, module, fileVideo: fileVideo[0], lesson }));
    };

    const [changeCourseId, setChangeCourseId] = useState("");

    useEffect(() => {
        dispatch(fetchGetAllTeacherCourses());
    }, []);

    const onChoiceCourse = (courseId: string) => {
        setChangeCourseId(courseId);
        localStorage.setItem("courseId", courseId);
        dispatch(fetchGetCourseContent(courseId));
    };

    // const onSetFileVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = (e.target as HTMLInputElement).files?.[0];
    //     setFileVideo(file);
    // }

    useEffect(() => {
        //@ts-ignore
        dispatch(fetchGetCourseContent(localStorage.getItem("courseId")));
        //@ts-ignore
        setChangeCourseId(localStorage.getItem("courseId"));
    }, [changeCourseId]);

    return (
        <div>
            <form className="teacher-course-add" onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="photoCourse"
                    type="file"
                    ref={register}
                    className="custom-file-input"
                />
                <p className="teacher-course-add-error">{errorPhotoCourse}</p>

                <textarea
                    name="profession"
                    placeholder="Профессия"
                    ref={register}
                />
                <p className="teacher-course-add-error">{errors.profession?.message}</p>

                <textarea
                    name="author"
                    placeholder="Автор курса"
                    ref={register}
                />
                <p className="teacher-course-add-error">{errors.author?.message}</p>

                <textarea
                    name="price"
                    placeholder="Цена курса"
                    ref={register}
                />
                <p className="teacher-course-add-error">{errors.price?.message}</p>

                <textarea
                    name="shotDescription"
                    placeholder="Краткое описание"
                    ref={register}
                />
                <p className="teacher-course-add-error">{errors.shotDescription?.message}</p>

                <div className="teacher-course-add-full-description">
                    <span>Полное описание курса</span>
                    <CKEditor
                        editor={ClassicEditor}
                        data={fullDescription}
                        onChange={(event: any, editor: any) => {
                            const data = editor.getData()
                            setFullDescription(data)
                        }}
                    />
                </div>

                <div style={{ marginTop: "60px", marginBottom: "60px" }}>
                    * Добавьте первый модуль и вводную лекцию
                </div>

                <input
                    name="fileVideo"
                    type="file"
                    className="custom-file-input"
                    ref={register}
                />
                <p className="teacher-course-add-error">{errorVideoCourse}</p>

                <textarea
                    name="module"
                    placeholder="Название модуля"
                    ref={register}
                />
                <p className="teacher-course-add-error">{errors.module?.message}</p>

                <textarea
                    name="lesson"
                    placeholder="Лекция"
                    ref={register}
                />
                <p className="teacher-course-add-error">{errors.lesson?.message}</p>

                <Button typeStyle="secondary" type="submit">Создать курс</Button>

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
            <CreateModule changeCourseId={changeCourseId} />
        </div>
    );
};

export default CreateCourse;
