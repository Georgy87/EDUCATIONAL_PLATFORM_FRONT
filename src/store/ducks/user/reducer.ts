import produce, { Draft } from "immer";
import { UserActionsTypes, UserActionType } from "./actions";

export type UserInfoType = {
    avatar: string;
    email: string;
    id: string;
    name: string;
    surname: string;
    teacher: string;
    isAuth: string;
};

export type UserType = {
    token: number
    user: UserInfoType
};

export type UserStateType = {
    user:  {};
    isAuth: boolean;
};

const initialState: UserStateType = {
    user: {},
    isAuth: false,
};

const userReducer = produce((draftState: Draft<UserStateType>, action: UserActionsTypes) => {
    switch (action.type) {
        case UserActionType.SET_USER:
            draftState.user = action.payload;
            draftState.isAuth = true;
            break;
        case  UserActionType.LOGOUT:
            localStorage.removeItem("token");
            draftState.user = {};
            draftState.isAuth = false;
            break;
        default:
            break;
    }
}, initialState);

export default userReducer;
