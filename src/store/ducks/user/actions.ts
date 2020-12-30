import { GetShoppingCartType, SetLoadedActionType, SetLoadingActionType } from "../user/types";
import { CoursesDataType, UserType } from "./reducer";
import { LogoutType, SetUserActionType, UserActionType } from "./types";
import { SetShoppingCartCourses } from './types';

export const setUser = (user: UserType): SetUserActionType => {
    return {
        type: UserActionType.SET_USER,
        payload: user,
    };
};

export const logout = (): LogoutType => {
    return {
        type: UserActionType.LOGOUT,
    };
};

export const setUserLoading = (): SetLoadingActionType => {
    return {
        type: UserActionType.SET_LOADING,
    };
};

export const setUserLoaded = (): SetLoadedActionType => {
    return {
        type: UserActionType.SET_LOADED,
    };
};

export const setShoppingCourses = (courses: CoursesDataType): SetShoppingCartCourses => {
    return {
        type: UserActionType.SET_SHOPPING_CART_COURSES,
        payload: courses
    }
}

export type UserActionsTypes =
    | SetUserActionType
    | LogoutType
    | SetLoadingActionType
    | SetLoadedActionType
    | SetShoppingCartCourses;
