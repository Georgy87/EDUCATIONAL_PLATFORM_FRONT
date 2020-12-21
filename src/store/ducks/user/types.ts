import { UserType } from "./reducer";

export enum UserActionType {
    SET_USER = "SET-USER",
    LOGOUT = "LOGOUT",
}
export type SetUserActionType = {
    type: UserActionType.SET_USER;
    payload: UserType;
}

export type LogoutType = {
    type: UserActionType.LOGOUT;
};
