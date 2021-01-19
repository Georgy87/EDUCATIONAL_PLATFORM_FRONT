import React from "react";

import { useDispatch } from 'react-redux';
import { reset } from 'redux-form';
import { fetchRegistration } from '../../../store/ducks/user/actions';
import { RegistrationTeacherReduxForm, RegistrationFormValuesType } from '../RegistrationPageForTeacher';

const RegistrationTeacher = () => {

    const dispatch = useDispatch();

    const submit = (data: RegistrationFormValuesType) => {
        const { name, surname, email, password, rememberMe } = data;
        dispatch(
            fetchRegistration({ name, surname, email, password, teacher: rememberMe })
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