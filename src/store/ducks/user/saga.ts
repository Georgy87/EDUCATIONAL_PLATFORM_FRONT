import axios from "axios";
import { setUser, UserActionsTypes } from "./actions";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../../store";
import { UserStateType, UserType } from "./reducer";

type DispatchType = Dispatch<UserActionsTypes>;
type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    UserActionsTypes
>;
export const registration = (name: string, surname: string, email: string, password: string, teacher: boolean | false): ThunkType => {
    return async () => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/registration",
                {
                    name,
                    surname,
                    email,
                    password,
                    teacher,
                }
            );
            // return console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
};

export const login = (email: string, password: string): ThunkType  => {
    console.log(email, password);
    return async (dispatch: DispatchType) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    email,
                    password,
                }
            );

            localStorage.setItem("token", response.data.token);
            return dispatch(setUser(response.data));
        } catch (error) {
            console.log(error);
        }
    };
};

export const auth = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/auth/auth",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            dispatch(setUser(response.data));

            localStorage.setItem("token", response.data.token);
        } catch (e) {
            console.log(e);
            // localStorage.removeItem("token");
        }
    };
};

export const uploadAvatar = (file: any): ThunkType  => {
    return async (dispatch: DispatchType) => {
        try {
            const formData = new FormData();

            formData.append("file", file);

            const result = await axios.post(
                `http://localhost:5000/api/course/avatar`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );

            return await dispatch(setUser(result.data));
            // console.log(result);
        } catch (error) {
            console.log(error);
        }
    };
};