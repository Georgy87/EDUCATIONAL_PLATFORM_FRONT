import axios from "axios";
import { setShoppingCourses, setUser, UserActionsTypes } from "./actions";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../../store";
import { UserStateType } from "./reducer";
import { userApi } from "../../../services/api/userApi";
import { setUserLoading, setUserLoaded } from "../user/actions";

type DispatchType = Dispatch<UserActionsTypes>;
type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    UserActionsTypes
>;

export const registration = (
    name: string,
    surname: string,
    email: string,
    password: string,
    teacher: boolean | false
) => {
    return async () => {
        try {
            await axios.post(`http://localhost:5000/api/auth/registration`, {
                name,
                surname,
                email,
                password,
                teacher,
            });
            // return console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
};

export const login = (email: string, password: string): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(setUserLoading());
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    email,
                    password,
                }
            );
            dispatch(setUserLoaded());
            localStorage.setItem("token", response.data.token);
            dispatch(setUser(response.data));
        } catch (error) {
            console.log(error);
        }
    };
};

export const auth = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(setUserLoading());
        try {
            const user = await userApi.getUser();
            dispatch(setUser(user));
            localStorage.setItem("token", user.token);
            dispatch(setUserLoaded());
        } catch (e) {
            console.log(e);
            // localStorage.removeItem("token");
        }
    };
};

export const uploadAvatar = (file: any): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(setUserLoading());
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
            dispatch(setUserLoaded());
            return await dispatch(setUser(result.data));
            // console.log(result);
        } catch (error) {
            console.log(error);
        }
    };
};

export const changeInfoProfileUser = (
    name: string,
    surname: string,
    professionalСompetence: string
): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const result = await axios.post(
                `http://localhost:5000/api/auth/change-info`,
                { name, surname, professionalСompetence },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export const setShoppingCartIds = (id: string): ThunkType => {
    return async () => {
        try {
            await userApi.setShoppingCartIds(id);
        } catch (error) {
            console.log(error);
        }
    };
};

export const getShoppingCart = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const data = await userApi.getShoppingCart();
            dispatch(setShoppingCourses(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteShoppingCartCourse = (id: string): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const data = await userApi.deleteShoppingCart(id);
            dispatch(setShoppingCourses(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export const purchasedCourses = (ids: string[], totalPrice: number): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const data = await userApi.setPurchasedCourses(ids, totalPrice);
            // dispatch(setShoppingCourses(data));
        } catch (error) {
            console.log('Purchased courses error');
        }
    };
};





