import produce, { Draft } from "immer";
import { UserActionsTypes } from "./actions";
import { UserActionType } from "./types";

type UserInfoType = {
    avatar: string;
    email: string;
    id: string;
    name: string;
    surname: string;
    teacher: string;
    isAuth: string;
    professionalСompetence: string;
};

export type UserType = {
    token: string;
    user: UserInfoType;
}

export type UserStateType = {
    user: UserType | null;
    isAuth: boolean;
};

const initialState: UserStateType = {
    user: null,
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
            draftState.user = null;
            draftState.isAuth = false;
            break;
        default:
            break;
    }
}, initialState);

export default userReducer;
