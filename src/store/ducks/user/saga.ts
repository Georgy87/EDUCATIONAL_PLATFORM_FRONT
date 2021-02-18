import { setLoadingPurchasedCourses, setPurchasedCourses, setShoppingCourses, setSubmitLoading, setUser, setVerifyUser } from "./actions";
import { userApi } from "../../../services/api/userApi";
import { setUserLoading, setUserLoaded } from "../user/actions";
import { FetchChangeInfoProfileUserType, FetchDeleteShoppingCartCourseType, FetchLoginType, FetchPurchasedCoursesType, FetchRegistrationType, FetchSetShoppingCartIdsType, FetchUploadAvatarType, FetchVerifyType, UserActionType } from "./types";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";

export function* fetchRegistrationRequest({ payload }: FetchRegistrationType) {
    try {
        yield put(setSubmitLoading(true));
        yield call(userApi.registrationUser, payload);
        yield put(setSubmitLoading(false));
    } catch (error) {
        yield console.log(error);
    }
}

export function* fetchVerifyRequest({ payload }: FetchVerifyType) {
    try {
        yield call(userApi.verifyUser, payload);
        yield put(setVerifyUser(true));
    } catch (error) {
        yield console.log(error);
    }
}

export function* fetchLoginRequest({ payload }: FetchLoginType) {
    try {
        yield put(setSubmitLoading(true));
        yield put(setUserLoading());
        const data = yield call(userApi.loginUser, payload);
        localStorage.setItem("token", data.token);
        yield put(setUser(data));
        yield put(setUserLoaded());
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
        yield localStorage.setItem("token", data.token);
        yield put(setUserLoaded());
    } catch (e) {
        yield console.log(e);
    }
};

export function* fetchUploadAvatarRequest({ payload }: FetchUploadAvatarType) {
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

export function* fetchChangeInfoProfileUserRequest({ payload }: FetchChangeInfoProfileUserType) {
    try {
        yield call(userApi.changeInfoUser, payload);
    } catch (error) {
        yield console.log(error);
    }
};

export function* fetchSetShoppingCartIdsRequest({ payload }: FetchSetShoppingCartIdsType) {
    try {
        yield call(userApi.setShoppingCartIds, payload);
    } catch (error) {
        yield console.log(error);
    }
};

export function* fetchGetShoppingCartRequest() {
    try {
        const data = yield call(userApi.getShoppingCart);
        yield put(setShoppingCourses(data));
    } catch (error) {
        yield console.log(error);
    }
};

export function* fetchDeleteShoppingCartCourseRequest({ payload }: FetchDeleteShoppingCartCourseType) {
    try {
        const data = yield call(userApi.deleteShoppingCart, payload);
        yield put(setShoppingCourses(data));
    } catch (error) {
        yield console.log(error);
    }
};

export function* fetchPurchasedCoursesRequest({ payload }: FetchPurchasedCoursesType) {
    try {
        yield call(userApi.setPurchasedCourses, payload);
    } catch (error) {
        yield console.log("Purchased courses error");
    }
};

export function* fetchGetPurchasedCoursesRequest() {
    try {
        const data = yield call(userApi.getPurchasedCourses);
        yield put(setPurchasedCourses(data));
        yield put(setLoadingPurchasedCourses());
    } catch (error) {
        yield console.log(error);
    }
};

export function* UserSaga() {
    yield takeLatest(UserActionType.FETCH_REGISTRATION, fetchRegistrationRequest);
    yield takeLatest(UserActionType.FETCH_VERIFY, fetchVerifyRequest);
    yield takeLatest(UserActionType.FETCH_LOGIN, fetchLoginRequest);
    yield takeLatest(UserActionType.FETCH_AUTH, fetchAuthRequest);
    yield takeLatest(UserActionType.FETCH_UPLOAD_AVATAR, fetchUploadAvatarRequest);
    yield takeLatest(UserActionType.FETCH_CHANGE_INFO_PROFILE_USER, fetchChangeInfoProfileUserRequest);
    yield takeLatest(UserActionType.FETCH_SET_SHOPPING_CART_IDS, fetchSetShoppingCartIdsRequest);
    yield takeLatest(UserActionType.FETCH_GET_SHOPPING_CART, fetchGetShoppingCartRequest);
    yield takeLatest(UserActionType.FETCH_DELETE_SHOPPING_CART, fetchDeleteShoppingCartCourseRequest);
    yield takeLatest(UserActionType.FETCH_PURCHASED_COURSES, fetchPurchasedCoursesRequest);
    yield takeLatest(UserActionType.FETCH_GET_PURCHASED_COURSES, fetchGetPurchasedCoursesRequest);
}


