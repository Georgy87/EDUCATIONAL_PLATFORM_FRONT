import { Action } from "redux";
import { UserTokenType } from "./reducer";

export enum UserActionType {
    SET_USER = "SET-USER",
    LOGOUT = "LOGOUT",
}
export interface SetUserActionInterface extends Action<UserActionType> {
    type: UserActionType.SET_USER;
    payload: UserTokenType;
}

export type LogoutType = {
    type: UserActionType.LOGOUT;
};

export const setUser = (user: UserTokenType): SetUserActionInterface => {
    console.log(user);
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

export type UserActionsTypes = SetUserActionInterface | LogoutType;
