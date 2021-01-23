import { addCourseDirections, deleteСourseDirections, setCourseDirections, setFilterByDirections } from "./actions";
import { DirectionsActionType, FetchDeleteDirectionType, FetchFilterByDirectionType, FetchUploadCourseDirectionsType } from "./types";
import { directionsApi} from "../../../services/api/directionsApi";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";

export function* fetchUploadCourseDirectionsRequest({payload}: FetchUploadCourseDirectionsType) {
    try {
        const formData = new FormData();
        formData.append("file", payload.file);
        formData.append("direction", payload.direction);
        const data = yield call(directionsApi.uploadCourseDirections, formData);
        yield put(addCourseDirections(data));
    } catch (e) {
        yield console.log(e);
    }
};

export function* fetchGetCourseDirectionsRequest() {
    try {
        const data = yield call(directionsApi.getCourseDirections);
        yield put(setCourseDirections(data));
    } catch (e) {
        yield console.log(e);
    }
};

export function* fetchFilterByDirectionRequest({payload}: FetchFilterByDirectionType) {
    try {
        const data = yield directionsApi.filterByDirection(payload);
        yield put(setFilterByDirections(data));
    } catch (e) {
        console.log(e);
    }
};

export function* fetchDeleteDirectionRequest({payload}: FetchDeleteDirectionType) {
    try {
        yield put(deleteСourseDirections(payload.directionId));
        yield call(directionsApi.deleteDirection, payload);
    } catch (e) {
        yield console.log(e);
    }
};

export function* DirectionsSaga() {
    yield takeLatest(DirectionsActionType.FETCH_UPLOAD_COURSE_DIRECTIONS, fetchUploadCourseDirectionsRequest);
    yield takeLatest(DirectionsActionType.FETCH_GET_COURSE_DIRECTIONS, fetchGetCourseDirectionsRequest);
    yield takeLatest(DirectionsActionType.FETCH_FILTER_BY_DIRECTION, fetchFilterByDirectionRequest);
    yield takeLatest(DirectionsActionType.FETCH_DELETE_DIRECTION, fetchDeleteDirectionRequest);
}