import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { requireEmail, minLength } from "../validate/validateInput";
import { InputForEmail, InputForPassword } from "../inputs/inputs";
import { registration } from "../../actions/users";

import "./RegistrationPage.css";

const lengthMin = minLength(6);

const RegistrationForm = (props) => {
    const { handleSubmit, reset, isAuth, resetForm } = props;
    return (
        <div>
            <div className="registration-container">
                <div className="registration-background"></div>
                <div className="registration">
                    <div className="registration-wrapper">
                        <form
                            className="registration-inputs"
                            onSubmit={handleSubmit}
                        >
                            <h1>Зарегистрироваться</h1>
                            <label>name</label>
                            <div>
                                <Field
                                    name="name"
                                    component="input"
                                    type="text"
                                />
                            </div>
                            <label>email</label>
                            <div>
                                <Field
                                    name="email"
                                    component="input"
                                    validate={[requireEmail]}
                                    component={InputForEmail}
                                    type="text"
                                />
                            </div>
                            <label>password</label>
                            <div>
                                <Field
                                    name="password"
                                    component="input"
                                    validate={[lengthMin]}
                                    component={InputForPassword}
                                    type="text"
                                />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="registration-registrations">
                        <span>У вас уже есть аккаунт?</span>
                        <NavLink to="/login">Войти</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

const RegistrationReduxForm = reduxForm({ form: "Registration" })(
    RegistrationForm
);

const Registration = (props) => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user.isAuth);

    const submit = (data) => {
        const { name, email, password } = data;
        dispatch(registration(name, email, password));
        dispatch(reset('Registration'));
    };
    return (
        <div>
            <RegistrationReduxForm onSubmit={submit} />
        </div>
    );
};

export default Registration;

// const lengthMin = minLength(6);

// const LoginForm = (props) => {
//     const { handleSubmit, reset, isAuth } = props;
//     if (isAuth) {
//         reset();
//     }
//     return (
//         <div className="form-wrapper">
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <h1 style={{ color: "white", textAlign: "center" , paddingTop: "20px"}}>LOGIN</h1>
//                 <div>
//                     <Field
//                         name="login"
//                         validate={[requireEmail]}
//                         component={InputForLogin}
//                         type="text"
//                         placeholder="email"
//                     />
//                 </div>
//                 <div>
//                     <Field
//                         name="Password"
//                         validate={[lengthMin]}
//                         component={InputForLogin}
//                         type="text"
//                         placeholder="password"
//                     />
//                 </div>
//                 <div>
//                     <Field
//                         name="rememberMe"
//                         component="input"
//                         type="checkbox"
//                     />
//                 </div>
//                 <button className="login-form-btn" type="submit">
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

// const Login = (props) => {
//     const submit = (data) => {
//         const { login, Password, rememberMe } = data;
//         console.log(data);
//         props.setLoginAuth(login, Password, rememberMe);
//     };

//     return (
//         <div>
//             <LoginReduxForm onSubmit={submit} isAuth={props.isAuth} />
//         </div>
//     );
// };
