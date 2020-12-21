import { UserType } from "./reducer";
import { LogoutType, SetUserActionType, UserActionType } from "./types";

export const setUser = (user: UserType): SetUserActionType  => {
    return {
        type: UserActionType.SET_USER,
        payload: user
    };
};

export const logout = (): LogoutType => {
    return {
        type: UserActionType.LOGOUT,
    };
};

export type UserActionsTypes = SetUserActionType  | LogoutType;
