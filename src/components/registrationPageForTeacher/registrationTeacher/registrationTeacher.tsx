import React from "react";

import { useDispatch } from 'react-redux';
import { reset } from 'redux-form';
import { registration } from '../../../store/ducks/user/saga';
import { RegistrationTeacherReduxForm, RegistrationFormValuesType } from '../RegistrationPageForTeacher';

const RegistrationTeacher = () => {

    const dispatch = useDispatch();

    const submit = (data: RegistrationFormValuesType) => {
        const { name, surname, email, password, rememberMe } = data;
        dispatch(
            registration(name, surname, email, password, rememberMe)
        );
        dispatch(reset("RegistrationTeacher"));
    };
    return (
        <div>
            <RegistrationTeacherReduxForm onSubmit={submit} />
        </div>
    );
};

export default RegistrationTeacher;