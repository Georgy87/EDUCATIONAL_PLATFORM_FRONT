import { UserType } from "./reducer";

export enum UserActionType {
    SET_USER = "SET-USER",
    LOGOUT = "LOGOUT",
    SET_LOADING = "SET-LOADING",
    SET_LOADED = "SET-LOADED",
    SET_SHOPPING_CARTS_IDS = "SET_SHOPPING_CARTS_IDS"
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

export type SetShoppingCartIds = {
    type: UserActionType.SET_SHOPPING_CARTS_IDS,
    payload: string;
}

