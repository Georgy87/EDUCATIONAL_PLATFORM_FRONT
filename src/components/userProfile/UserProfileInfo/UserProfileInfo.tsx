import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeInfoProfileUser } from '../../../store/ducks/user/saga';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from "@material-ui/core";

import "./UserProfileInfo.css";

export interface UserProfileInfoProps {
    name: string;
    surname: string;
    professionalСompetence: string;
}

const UserProfileInfoSchema = yup.object().shape({
    name: yup.string().required('Введите имя'),
    surname: yup.string().required('Введите фамилию'),
    professionalСompetence: yup.string().required('Введите профессиональную компетенцию'),
});

function UserProfileInfo()  {
    const dispatch = useDispatch();

    const { register, handleSubmit, errors } = useForm<UserProfileInfoProps>({
        resolver: yupResolver(UserProfileInfoSchema)
    });

    const onSubmit = (data: UserProfileInfoProps) => {
        const { name, surname, professionalСompetence } = data;
        dispatch(changeInfoProfileUser(name, surname, professionalСompetence))
    };

    return (
        <>
            <form className="profile-info-container" onSubmit={handleSubmit(onSubmit)}>
                <div className="profile-info-titles">
                    <p>Профиль</p>
                    <div className="photo-descr">Добавьте информацию о себе</div>
                </div>
                <div className="profile-info-add">
                    <input
                        name="name"
                        placeholder="Имя"
                        type="text"
                        ref={register}
                    />
                    <p>{errors.name?.message}</p>
                    <input
                        name="surname"
                        placeholder="Фамилия"
                        ref={register}
                    />
                    <p>{errors.surname?.message}</p>
                    <textarea
                        name="professionalСompetence"
                        placeholder="Профессиональная компетенция"
                        ref={register}
                    />
                    <p>{errors.professionalСompetence?.message}</p>
                    <Button type="submit" color="primary" variant="contained">Сохранить</Button>
                </div>
            </form>
        </>
    );
};
export default UserProfileInfo;
