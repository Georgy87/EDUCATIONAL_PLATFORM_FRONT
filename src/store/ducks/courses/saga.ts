import { CoursesApi } from "../../../services/api/coursesApi";
import { deleteFilterByDirections } from "../directions/actions";
import { deleteCourseAction, setCourseForTraining, setCourses, setLoaded, SetLoadingCourseForTraining } from "./actions";
import { FetchUploadNewCourseType, CoursesActionType, FetchDeleteCourseType, FetchGetCourseForTraining } from "./types";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";

export function* fetchUploadNewCourseRequest({payload}: FetchUploadNewCourseType) {
    const formData = new FormData();

    formData.append("file", payload.fileVideo);
    formData.append("file", payload.photoCourse);
    formData.append("profession", payload.profession);
    formData.append("author", payload.author);
    formData.append("price", payload.price);
    formData.append("smallDescription", payload.shotDescription);
    formData.append("fullDescription", payload.fullDescription);
    formData.append("lesson", payload.lesson);
    formData.append("module", payload.module);
    try {
        yield call(CoursesApi.uploadCourse, formData);
    } catch (e) {
        yield console.log(e);
    }
};

export function* fetchGetCoursesRequest() {
    try {
        const data = yield call(CoursesApi.getCourses);
        yield put(setCourses(data.courses));
        yield put(setLoaded());
    } catch (e) {
        yield console.log(e);
    }
};

export function* fetchDeleteCourseRequest({payload}: FetchDeleteCourseType) {
    try {
        yield call(CoursesApi.deleteCourse, payload);
        yield put((deleteCourseAction(payload.courseId)));
        yield put((deleteFilterByDirections(payload.courseId)));
    } catch (e) {
        yield console.log(e);
    }
};

export function* fetchGetCourseForTrainingRequest({payload}: FetchGetCourseForTraining) {
    try {
        const data = yield call(CoursesApi.getCourseForTraining, payload);
        yield put((setCourseForTraining(data)));
        yield put(SetLoadingCourseForTraining());
    } catch (e) {
        yield console.log(e);
    }
};

export function* CoursesSaga() {
    yield takeLatest(CoursesActionType.FETCH_UPLOAD_NEW_COURSE, fetchUploadNewCourseRequest);
    yield takeLatest(CoursesActionType.FETCH_GET_COURSES, fetchGetCoursesRequest);
    yield takeLatest(CoursesActionType.FETCH_DELETE_COURSE, fetchDeleteCourseRequest);
    yield takeLatest(CoursesActionType.FETCH_COURSE_FOR_TRAINING, fetchGetCourseForTrainingRequest);
}


