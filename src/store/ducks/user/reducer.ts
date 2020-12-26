import produce, { Draft } from "immer";
import { UserActionsTypes } from "./actions";
import { UserActionType } from "./types";

export type UserInfoType = {
    avatar: string;
    email: string;
    id: string;
    name: string;
    surname: string;
    teacher: string;
    isAuth: string;
    competence: string;
};

export type UserType = {
    token: string;
    user: UserInfoType;
};

export type UserStateType = {
    user: UserType | null;
    isAuth: boolean;
    loadingState: string;
    // shoppingCart: Array<string> | string;
};

const initialState: UserStateType = {
    user: null,
    isAuth: false,
    loadingState: "NEVER",
    // shoppingCart: []
};

const userReducer = produce(
    (draftState: Draft<UserStateType>, action: UserActionsTypes) => {
        switch (action.type) {
            case UserActionType.SET_USER:
                draftState.user = action.payload;
                draftState.isAuth = true;
                break;
            case UserActionType.LOGOUT:
                localStorage.removeItem("token");
                draftState.user = null;
                draftState.isAuth = false;
                break;
            case UserActionType.SET_LOADING:
                draftState.loadingState = UserActionType.SET_LOADING;
                break;
            case UserActionType.SET_LOADED:
                draftState.loadingState = UserActionType.SET_LOADED;
                break;
            // case UserActionType.SET_SHOPPING_CARTS_IDS:
            //     draftState.shoppingCart = UserActionType.SET_SHOPPING_CARTS_IDS;
            //     break;
            default:
                break;
        }
    },
    initialState
);

export default userReducer;
