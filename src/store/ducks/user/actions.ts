import { SetLoadedActionType, SetLoadingActionType, SetSubmitLoadingActionType } from "../user/types";
import { CoursesDataType, UserType } from "./types";
import {
    LogoutType,
    SetUserActionType,
    UserActionType,
    PurchasedCoursesType,
    SetPurchasedCourses,
} from "./types";
import { SetShoppingCartCourses } from "./types";

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

export const setSubmitLoading = (payload: Boolean): SetSubmitLoadingActionType => {
    return {
        type: UserActionType.SET_SUBMIT_LOADING,
        payload
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
        payload: courses,
    };
};

export const setPurchasedCourses = (courses: PurchasedCoursesType[]): SetPurchasedCourses => {
    return {
        type: UserActionType.SET_PURCHASED_COURSES,
        payload: courses,
    };
};
