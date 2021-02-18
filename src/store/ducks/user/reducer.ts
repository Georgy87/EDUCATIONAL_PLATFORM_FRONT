import produce, { Draft } from "immer";
import { UserActionsTypes } from "./types";
import { UserActionType, UserStateType } from "./types";

const initialState: UserStateType = {
    verify: false,
    user: null,
    isAuth: false,
    loadingState: "NEVER",
    shoppingCartCourses: null,
    purchasedCourses: null,
    submitLoading: false,
    loadingPurchasedCourses: false,
};

const userReducer = produce(
    (draftState: Draft<UserStateType>, action: UserActionsTypes) => {
        switch (action.type) {
            case UserActionType.SET_VERIFY:
                draftState.verify = action.payload;
                break;
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
            case UserActionType.SET_SUBMIT_LOADING:
                draftState.submitLoading = action.payload;
                break;
            case UserActionType.SET_LOADED:
                draftState.loadingState = UserActionType.SET_LOADED;
                break;
            case UserActionType.FETCH_GET_SHOPPING_CART:
                draftState.shoppingCartCourses = null;
                break;
            case UserActionType.SET_SHOPPING_CART_COURSES:
                draftState.shoppingCartCourses = action.payload;
                break;
            case UserActionType.SET_PURCHASED_COURSES:
                draftState.purchasedCourses = action.payload;
                break;
            case UserActionType.SET_LOADING_PURCHASED_COURSES:
                draftState.loadingPurchasedCourses = true;
                break;
            default:
                break;
        }
    },
    initialState
);

export default userReducer;
