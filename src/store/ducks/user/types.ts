import { UserType } from "./reducer";

export enum UserActionType {
    SET_USER = "SET-USER",
    LOGOUT = "LOGOUT",
    SET_LOADING = "SET-LOADING",
    SET_LOADED = "SET-LOADED"
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

