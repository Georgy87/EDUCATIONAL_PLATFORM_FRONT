import { Action } from "redux"
import { UserStateType, UserType } from "./reducer"

export enum UserActionType {
    SET_USER = "SET-USER",
    LOGOUT = "LOGOUT"

}
export interface SetUserActionInterface extends Action<UserActionType> {
    type: UserActionType.SET_USER;
    payload: UserType;
}

// export type setUserType = {
//     type:  UserActionType.SET_USER;
//     payload: UserType;
// }

export type LogoutType = {
    type:  UserActionType.LOGOUT;
}

export const setUser = (user: UserType): SetUserActionInterface => {
    console.log(user);
    return {
        type: UserActionType.SET_USER,
        payload: user
    }
}

export const logout = (): LogoutType => {
    return {
        type: UserActionType.LOGOUT,
    }
}

export type UserActionsTypes = SetUserActionInterface |  LogoutType;


