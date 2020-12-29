import { CoursesDataType, UserType } from "./reducer";

export enum UserActionType {
    SET_USER = "SET-USER",
    LOGOUT = "LOGOUT",
    SET_LOADING = "SET-LOADING",
    SET_LOADED = "SET-LOADED",
    SET_SHOPPING_CART_COURSES = "SET-SHOPPING-CART-COURSES",
}
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

export type SetLoadedActionType = {
    type: UserActionType.SET_LOADED;
};

export type SetShoppingCartCourses = {
    type: UserActionType.SET_SHOPPING_CART_COURSES,
    payload: CoursesDataType;
}

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


