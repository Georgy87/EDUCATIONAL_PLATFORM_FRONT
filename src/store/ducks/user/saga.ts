import { setPurchasedCourses, setShoppingCourses, setSubmitLoading, setUser } from "./actions";
import { userApi } from "../../../services/api/userApi";
import { setUserLoading, setUserLoaded } from "../user/actions";
import { FetchChangeInfoProfileUserType, FetchDeleteShoppingCartCourseType, FetchLoginType, FetchPurchasedCoursesType, FetchRegistrationType, FetchSetShoppingCartIdsType, FetchUploadAvatarType, UserActionType } from "./types";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { RegisterFormProps } from "../../../components/registrationPage/RegistrationPage";

// THUNK

// export const fetchRegistration = (name: string, surname: string, email: string, password: string, teacher: boolean | false): ThunkType => {
//     return async (dispatch: DispatchType) => {
//         dispatch(setSubmitLoading(true));
//         try {
//             await userApi.registrationUser(name, surname, email, password, teacher);
//             console.log('loaded');
//             dispatch(setSubmitLoading(false));
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };

// SAGA

export function* fetchRegistrationRequest({payload}: FetchRegistrationType) {
    try {
        yield put(setSubmitLoading(true));
        yield call(userApi.registrationUser, payload);
        yield put(setSubmitLoading(false));
    } catch (error) {
        // yield put(console.log(error));
        yield console.log(error);
    }
}

// THUNK

// export const fetchLogin = (email: string, password: string): ThunkType => {
//     return async (dispatch: DispatchType) => {
//         dispatch(setSubmitLoading(true));
//         try {
//             const data = await userApi.loginUser(email, password);
//             localStorage.setItem("token", data.token);
//             dispatch(setUser(data));
//             dispatch(setSubmitLoading(false));
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };


// THUNK

// export const fetchAuth = (): ThunkType => {
//     return async (dispatch: DispatchType) => {
//         dispatch(setUserLoading());
//         try {
//             const data = await userApi.getUser();
//             dispatch(setUser(data));
//             localStorage.setItem("token", data.token);
//             dispatch(setUserLoaded());
//         } catch (e) {
//             console.log(e);
//         }
//     };
// };

export function* fetchLoginRequest({payload}: FetchLoginType) {
    try {
        yield put(setSubmitLoading(true));
        const data =  yield call(userApi.loginUser, payload);
        localStorage.setItem("token", data.token);
        yield put(setUser(data));
        yield put(setSubmitLoading(false));
    } catch (error) {
        yield console.log(error);
    }
}

export function* fetchAuthRequest() {
    try {
        yield put(setUserLoading());
        const data = yield call(userApi.getUser);
        yield put(setUser(data));
        localStorage.setItem("token", data.token);
        yield put(setUserLoaded());
    } catch (e) {
        yield console.log(e);
    }
};

// THUNK

// export const fetchUploadAvatar = (file: File): ThunkType => {
//     return async (dispatch: DispatchType) => {
//         dispatch(setUserLoading());
//         try {
//             const formData = new FormData();
//             formData.append("file", file);
//             const data = await userApi.uploadUserAvatar(formData);
//             dispatch(setUserLoaded());
//             dispatch(setUser(data.data));
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };

export function* fetchUploadAvatarRequest({payload}: FetchUploadAvatarType) {
    try {
        yield put(setUserLoading());
        const formData = new FormData();
        formData.append("file", payload);
        const data = yield call(userApi.uploadUserAvatar, formData);
        yield put(setUserLoaded());
        yield put(setUser(data.data));
    } catch (error) {
        yield console.log(error);
    }
};

// THUNK

// export const fetchChangeInfoProfileUser = (name: string, surname: string, professionalСompetence: string): ThunkType => {
//     return async () => {
//         try {
//             await userApi.changeInfoUser(name, surname, professionalСompetence);
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };

export function* fetchChangeInfoProfileUserRequest({payload}: FetchChangeInfoProfileUserType) {
    try {
        yield call(userApi.changeInfoUser, payload);
    } catch (error) {
        yield console.log(error);
    }
};

// Thunk

// export const fetchSetShoppingCartIds = (id: string): ThunkType => {
//     return async () => {
//         try {
//             await userApi.setShoppingCartIds(id);
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };

export function* fetchSetShoppingCartIdsRequest({payload}: FetchSetShoppingCartIdsType) {
    try {
        yield call(userApi.setShoppingCartIds, payload);
    } catch (error) {
        yield console.log(error);
    }
};

// THUNK

// export const fetchGetShoppingCart = (): ThunkType => {
//     return async (dispatch: DispatchType) => {
//         try {
//             const data = await userApi.getShoppingCart();
//             dispatch(setShoppingCourses(data));
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };

export function* fetchGetShoppingCartRequest() {
        try {
            const data = yield call(userApi.getShoppingCart);
            yield put(setShoppingCourses(data));
        } catch (error) {
            yield console.log(error);
        }
};

// THUNK

// export const fetchDeleteShoppingCartCourse = (id: string): ThunkType => {
//     return async (dispatch: DispatchType) => {
//         try {
//             const data = await userApi.deleteShoppingCart(id);
//             dispatch(setShoppingCourses(data));
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };

export function* fetchDeleteShoppingCartCourseRequest({payload}: FetchDeleteShoppingCartCourseType) {
        try {
            const data = yield call(userApi.deleteShoppingCart, payload);
            yield put(setShoppingCourses(data));
        } catch (error) {
            yield console.log(error);
        }
};

// THUNK

// export const fetchPurchasedCourses = (ids: string[], totalPrice: number): ThunkType => {
//     return async () => {
//         try {
//             await userApi.setPurchasedCourses(ids, totalPrice);
//         } catch (error) {
//             console.log("Purchased courses error");
//         }
//     };
// };

export function* fetchPurchasedCoursesRequest({payload}: FetchPurchasedCoursesType) {
    try {
        yield call(userApi.setPurchasedCourses, payload);
    } catch (error) {
        yield console.log("Purchased courses error");
    }
};

// THUNK

// export const fetchGetPurchasedCourses = (): ThunkType => {
//     return async (dispatch: DispatchType) => {
//         try {
//             const data = await userApi.getPurchasedCourses();
//             dispatch(setPurchasedCourses(data));
//         } catch (error) {
//             console.log("Purchased courses error");
//         }
//     };
// };

export function* fetchGetPurchasedCourses() {
    try {
        const data = yield call(userApi.getPurchasedCourses);
        yield put(setPurchasedCourses(data));
    } catch (error) {
        yield console.log(error);
    }
};

export function* UserSaga() {
    yield takeLatest(UserActionType.FETCH_REGISTRATION, fetchRegistrationRequest);
    yield takeLatest(UserActionType.FETCH_LOGIN, fetchLoginRequest);
    yield takeLatest(UserActionType.FETCH_AUTH, fetchAuthRequest);
    yield takeLatest(UserActionType.FETCH_UPLOAD_AVATAR, fetchUploadAvatarRequest);
    yield takeLatest(UserActionType.FETCH_CHANGE_INFO_PROFILE_USER, fetchChangeInfoProfileUserRequest);
    yield takeLatest(UserActionType.FETCH_SET_SHOPPING_CART_IDS, fetchSetShoppingCartIdsRequest);
    yield takeLatest(UserActionType.FETCH_GET_SHOPPING_CART, fetchGetShoppingCartRequest);
    yield takeLatest(UserActionType.FETCH_DELETE_SHOPPING_CART, fetchDeleteShoppingCartCourseRequest);
    yield takeLatest(UserActionType.FETCH_PURCHASED_COURSES, fetchPurchasedCoursesRequest);
    yield takeLatest(UserActionType.FETCH_GET_PURCHASED_COURSES, fetchGetPurchasedCourses);
}


