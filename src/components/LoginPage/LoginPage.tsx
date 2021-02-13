import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

import {fetchLogin} from "../../store/ducks/user/actions";
import {AuthorizationBlock} from "../../hocs/AuthorizationBlock/AuthorizationBlock";
import {LoginFormSchema} from "../../utils/FormSchemas";

export type LoginFormProps = {
    email: string;
    password: string;
};

export type SchemaType = typeof LoginFormSchema;

export const LoginPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = (data : LoginFormProps) => {
        const {email, password} = data;
        dispatch(fetchLogin({email, password}));
        if (history.location.pathname === "/login") {
            history.push("/main");
        }
    };

    return (
        <div>
            <AuthorizationBlock onSubmit={onSubmit}
                formSchema={LoginFormSchema}
                pageName="login"/>
        </div>
    );
};
