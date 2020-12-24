import { SetLoadedActionType, SetLoadingActionType } from "../user/types";
import { UserType } from "./reducer";
import { LogoutType, SetUserActionType, UserActionType } from "./types";

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

export type UserActionsTypes =
    | SetUserActionType
    | LogoutType
    | SetLoadingActionType
    | SetLoadedActionType;
