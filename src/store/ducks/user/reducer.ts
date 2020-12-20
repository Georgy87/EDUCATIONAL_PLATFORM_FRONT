import produce, { Draft } from "immer";
import { UserActionsTypes, UserActionType } from "./actions";

type UserInfoType = {
    avatar: string;
    email: string;
    id: string;
    name: string;
    surname: string;
    teacher: string;
    isAuth: string;
};

type UserToken = {
    token: string;
    user: UserInfoType;
}

// export type UserType = {
//     user: UserToken;
// };

export type UserStateType = {
    user: UserToken | null;
    isAuth: boolean;
};

const initialState: UserStateType = {
    user: null,
    isAuth: false,
};

const userReducer = produce((draftState: Draft<UserStateType>, action: UserActionsTypes) => {
    switch (action.type) {
        case UserActionType.SET_USER:
            console.log(action.payload)
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
