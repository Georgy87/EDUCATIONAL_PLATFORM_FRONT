import axios from "axios";
import { setPurchasedCourses, setShoppingCourses, setUser } from "./actions";
import { UserActionsTypes } from "./types";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../../store";
import { userApi } from "../../../services/api/userApi";
import { setUserLoading, setUserLoaded } from "../user/actions";

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
            await userApi.registrationUser(name, surname, email, password, teacher);
        } catch (error) {
            console.log(error);
        }
    };
};

export const login = (email: string, password: string): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(setUserLoading());
        try {
            const data = await userApi.loginUser(email, password);
            localStorage.setItem("token", data.token);
            dispatch(setUser(data));
            dispatch(setUserLoaded());
        } catch (error) {
            console.log(error);
        }
    };
};

export const auth = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(setUserLoading());
        try {
            const data = await userApi.getUser();
            dispatch(setUser(data));
            localStorage.setItem("token", data.token);
            dispatch(setUserLoaded());
        } catch (e) {
            console.log(e);
        }
    };
};

export const uploadAvatar = (file: File): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(setUserLoading());
        try {
            const formData = new FormData();
            formData.append("file", file);
            const data = await userApi.uploadUserAvatar(formData);
            dispatch(setUserLoaded());
            dispatch(setUser(data.data));
        } catch (error) {
            console.log(error);
        }
    };
};

export const changeInfoProfileUser = (name: string, surname: string, professionalСompetence: string): ThunkType => {
    return async () => {
        try {
            await userApi.changeInfoUser(name, surname, professionalСompetence);
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
    return async () => {
        try {
            await userApi.setPurchasedCourses(ids, totalPrice);
        } catch (error) {
            console.log("Purchased courses error");
        }
    };
};

export const getPurchasedCourses = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const data = await userApi.getPurchasedCourses();
            dispatch(setPurchasedCourses(data));
        } catch (error) {
            console.log("Purchased courses error");
        }
    };
};


