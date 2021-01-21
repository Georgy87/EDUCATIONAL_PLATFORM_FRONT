import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { RegisterFormProps } from "../../../components/registrationPage/RegistrationPage";
import { AppStateType } from "../../store";

export enum UserActionType {
    FETCH_REGISTRATION = "FETCH_REGISTRATION",
    FETCH_LOGIN = "FETCH-LOGIN",
    FETCH_AUTH = "FETCH-AUTH",
    FETCH_UPLOAD_AVATAR = "FETCH-UPLOAD-AVATAR",
    FETCH_CHANGE_INFO_PROFILE_USER = "FETCH-CHANGE-INFO-PROFILE-USER",
    FETCH_SET_SHOPPING_CART_IDS = "FETCH-SET-SHOPPING-CART-IDS",
    FETCH_GET_SHOPPING_CART = "FETCH-GET-SHOPPING-CART",
    FETCH_DELETE_SHOPPING_CART = "FETCH-DELETE-SHOPPING-CART",
    FETCH_PURCHASED_COURSES = "FETCH-PURCHASED-COURSES",
    FETCH_GET_PURCHASED_COURSES = "FETCH-GET-PURCHASED-COURSES",
    SET_USER = "SET-USER",
    LOGOUT = "LOGOUT",
    SET_LOADING = "LOADING",
    SET_LOADED = "LOADED",
    SET_SHOPPING_CART_COURSES = "SET-SHOPPING-CART-COURSES",
    SET_PURCHASED_COURSES = "SET-PURCHASED-COURSES",
    SET_SUBMIT_LOADING = "SET-SUBMIT-LOADING",
    SET_LOADING_PURCHASED_COURSES = "SET-LOADING-PURCHASED-COURSES"
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
};

export type PurchasedCoursesType = {
    photo: string;
    author: string;
    smallDescription: string;
    id: string;
};

export type UserStateType = {
    user: UserType | null;
    isAuth: boolean;
    loadingState: string;
    shoppingCartCourses: CoursesDataType | null;
    purchasedCourses: PurchasedCoursesType[] | null;
    submitLoading: Boolean;
    loadingPurchasedCourses: Boolean;
};

// FETCH ACTIONS TYPES

export type FetchRegistrationType = {
    type: UserActionType.FETCH_REGISTRATION;
    payload: RegisterFormProps;
};

export type FetchLoginType = {
    type: UserActionType.FETCH_LOGIN;
    payload: { email: string; password: string };
};

export type FetchAuthType = {
    type: UserActionType.FETCH_AUTH;
};

export type FetchUploadAvatarType = {
    type: UserActionType.FETCH_UPLOAD_AVATAR;
    payload: File;
};

export type FetchChangeInfoProfileUserType = {
    type: UserActionType.FETCH_CHANGE_INFO_PROFILE_USER;
    payload: { name: string; surname: string; professionalСompetence: string };
};

export type FetchSetShoppingCartIdsType = {
    type: UserActionType.FETCH_SET_SHOPPING_CART_IDS;
    payload: string;
};

export type FetchGetShoppingCartType = {
    type: UserActionType.FETCH_GET_SHOPPING_CART;
};

export type FetchDeleteShoppingCartCourseType = {
    type: UserActionType.FETCH_DELETE_SHOPPING_CART;
    payload: string;
};

export type FetchPurchasedCoursesType = {
    type: UserActionType.FETCH_PURCHASED_COURSES;
    payload: { ids: string[]; totalPrice: number };
};

export type FetchGetPurchasedCoursesType = {
    type: UserActionType.FETCH_GET_PURCHASED_COURSES;
};

// ACTIONS TYPES

export type SetUserActionType = {
    type: UserActionType.SET_USER;
    payload: UserType;
};

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
    type: UserActionType.SET_SHOPPING_CART_COURSES;
    payload: CoursesDataType;
};

export type SetPurchasedCourses = {
    type: UserActionType.SET_PURCHASED_COURSES;
    payload: PurchasedCoursesType[];
};

export type SetLoadingPurchasedCourses = {
    type: UserActionType.SET_LOADING_PURCHASED_COURSES;
}

////////////

export type CoursesForCartShop = {
    photo: string;
    author: string;
    price: string;
    smallDescription: string;
    profession: string;
    id: string;
};

export type GetShoppingCartType = {
    totalPrice: number;
    coursesDestructured: CoursesForCartShop[];
};

export type UserActionsTypes =
    | SetUserActionType
    | LogoutType
    | SetLoadingActionType
    | SetLoadedActionType
    | SetShoppingCartCourses
    | SetPurchasedCourses
    | SetSubmitLoadingActionType
    | SetLoadingPurchasedCourses;

// Thunk types

export type DispatchType = Dispatch<UserActionsTypes>;
export type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    UserActionsTypes
>;
