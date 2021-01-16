import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../../store";

export enum UserActionType {
    SET_USER = "SET-USER",
    LOGOUT = "LOGOUT",
    SET_LOADING = "LOADING",
    SET_LOADED = "LOADED",
    SET_SHOPPING_CART_COURSES = "SET-SHOPPING-CART-COURSES",
    SET_PURCHASED_COURSES = "SET-PURCHASED-COURSES",
    SET_SUBMIT_LOADING = " SET-SUBMIT-LOADING",
}

// State types

export type UserInfoType = {
    avatar: string;
    email: string;
    id: string;
    name: string;
    surname: string;
    teacher: string;
    isAuth: string;
    competence: string;
};

export type UserType = {
    token: string;
    user: UserInfoType;

};

export type CoursesDataType = {
    coursesData: GetShoppingCartType;
}

export type PurchasedCoursesType = {
    photo: string;
    author: string;
    smallDescription: string;
    id: string;
}

export type UserStateType = {
    user: UserType | null;
    isAuth: boolean;
    loadingState: string;
    shoppingCartCourses: CoursesDataType | null;
    purchasedCourses: PurchasedCoursesType[] | null;
    submitLoading: Boolean;
};

// Actions types

export type SetUserActionType = {
    type: UserActionType.SET_USER;
    payload: UserType;
}

export type LogoutType = {
    type: UserActionType.LOGOUT;
};

export type SetLoadingActionType = {
    type: UserActionType.SET_LOADING;
};

export type SetSubmitLoadingActionType = {
    type: UserActionType.SET_SUBMIT_LOADING;
    payload: Boolean;
};

export type SetLoadedActionType = {
    type: UserActionType.SET_LOADED;
};

export type SetShoppingCartCourses = {
    type: UserActionType.SET_SHOPPING_CART_COURSES,
    payload: CoursesDataType;
}

export type SetPurchasedCourses = {
    type: UserActionType.SET_PURCHASED_COURSES,
    payload: PurchasedCoursesType[];
}

////////////

export type CoursesForCartShop = {
    photo: string;
    author: string;
    price: string;
    smallDescription: string;
    profession: string;
    id: string
}

export type GetShoppingCartType = {
    totalPrice: number;
    coursesDestructured: CoursesForCartShop[]
}

export type UserActionsTypes =
    | SetUserActionType
    | LogoutType
    | SetLoadingActionType
    | SetLoadedActionType
    | SetShoppingCartCourses
    | SetPurchasedCourses
    | SetSubmitLoadingActionType;

// Thunk types

export type DispatchType = Dispatch<UserActionsTypes>;
export type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    UserActionsTypes
>;
