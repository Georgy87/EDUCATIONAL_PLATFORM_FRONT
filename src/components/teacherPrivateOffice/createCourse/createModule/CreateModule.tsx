import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { fetchUploadCourseContent } from '../../../../store/ducks/contentCourses/actions';
import { CreateModuleSchema } from '../../../../utils/FormSchemas';
import { Button } from '../../../button/Button';

import "./CreateModule.css";

type PropsType = {
    changeCourseId: string;
}

export interface CreateModuleFormProps {
    fileVideo: File[];
    module: string;
    lesson: string;
}

export const CreateModule: React.FC<PropsType> = ({ changeCourseId }) => {
    const [errorVideoCourse, setErrorVideoCourse] = useState<string>('');

    const dispatch = useDispatch();

    const schema = CreateModuleSchema(setErrorVideoCourse);

    const { register, handleSubmit, errors } = useForm<CreateModuleFormProps>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: CreateModuleFormProps) => {
        const { fileVideo, module, lesson } = data;
        dispatch(fetchUploadCourseContent({courseId: changeCourseId, file: fileVideo[0], lesson, module}));
    };

    return (
        <div className="create-module-container">
            <h2>Добавить модуль к курсу</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="teacher-course-add ">
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

                <Button type="submit" typeStyle="secondary">
                    Добавить модуль к курсу
                </Button>
            </form>
        </div>
    )
}
