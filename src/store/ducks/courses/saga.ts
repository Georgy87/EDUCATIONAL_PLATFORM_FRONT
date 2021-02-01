import { CoursesApi } from "../../../services/api/coursesApi";
import { deleteFilterByDirections } from "../directions/actions";
import { addCommentsLoading, deleteCourseAction, setReplyToComment, setComments, setCommentsLoading, setCourseForTraining, setCourses, setLoaded, setLoadingCourseForTraining, addReplyToCommentLoading, replyToCommentLoading } from "./actions";
import { FetchUploadNewCourseType, CoursesActionType, FetchDeleteCourseType, FetchGetCourseForTrainingType, FetchGetCommentsType, FetchAddCommentType, FetchGetReplyToCommentType, FetchAddReplyToCommentType } from "./types";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { LoadingStatus } from "../../types";

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

export function* fetchGetCourseForTrainingRequest({payload}: FetchGetCourseForTrainingType) {
    try {
        const data = yield call(CoursesApi.getCourseForTraining, payload);
        yield put((setCourseForTraining(data)));
        yield put(setLoadingCourseForTraining());
    } catch (e) {
        yield console.log(e);
    }
};

export function* fetchGetCommentsRequest({payload}: FetchGetCommentsType) {
    try {
        const data = yield call(CoursesApi.getComments, payload);
        yield put(setComments(data.data));
        yield put(setCommentsLoading(true));
    } catch (e) {
        yield console.log(e);
    }
};

export function* fetchAddCommentRequest({payload}: FetchAddCommentType) {
    try {
        yield put(addCommentsLoading(LoadingStatus.LOADING));
        const { comments } = yield call(CoursesApi.addComment, payload);
        yield put(setComments(comments));
        yield put(addCommentsLoading(LoadingStatus.LOADED));
    } catch (e) {
        yield console.log(e);
    }
};

export function* fetchGetReplyToCommentRequest({payload}: FetchGetReplyToCommentType) {
    try {
        yield put(replyToCommentLoading(LoadingStatus.LOADING));
        const { data } = yield call(CoursesApi.getReplyToComment, payload);
        yield put(setReplyToComment(data));
        yield put(replyToCommentLoading(LoadingStatus.LOADED));
    } catch (e) {
        yield console.log(e);
    }
};

export function* fetchAddReplyToCommentRequest({payload}: FetchAddReplyToCommentType) {
    try {
        yield put(addReplyToCommentLoading(LoadingStatus.LOADING));
        const { data } = yield call(CoursesApi.addReplyToComment, payload);
        yield put(setReplyToComment(data));
        yield put(addReplyToCommentLoading(LoadingStatus.LOADED));
    } catch (e) {
        yield console.log(e);
    }
};

export function* CoursesSaga() {
    yield takeLatest(CoursesActionType.FETCH_UPLOAD_NEW_COURSE, fetchUploadNewCourseRequest);
    yield takeLatest(CoursesActionType.FETCH_GET_COURSES, fetchGetCoursesRequest);
    yield takeLatest(CoursesActionType.FETCH_DELETE_COURSE, fetchDeleteCourseRequest);
    yield takeLatest(CoursesActionType.FETCH_COURSE_FOR_TRAINING, fetchGetCourseForTrainingRequest);
    yield takeLatest(CoursesActionType.FETCH_GET_COMMENTS, fetchGetCommentsRequest);
    yield takeLatest(CoursesActionType.FETCH_ADD_COMMENT, fetchAddCommentRequest);
    yield takeLatest(CoursesActionType.FETCH_GET_REPLY_TO_COMMENT, fetchGetReplyToCommentRequest);
    yield takeLatest(CoursesActionType.FETCH_ADD_REPLY_TO_COMMENT, fetchAddReplyToCommentRequest);
}


