import { CoursesApi } from "../../../services/api/coursesApi";
import { deleteFilterByDirections } from "../directions/actions";
import { deleteCourseAction, setCourses, setLoaded } from "./actions";
import { ThunkType, DispatchType, FetchUploadNewCourseType, CoursesActionType, FetchDeleteCourseType } from "./types";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";

// THUNK

// export const fetchUploadNewCourse = (
//     photoCourse: File,
//     profession: string,
//     author: string,
//     price: string,
//     shotDescription: string,
//     fullDescription: string,
//     module: string,
//     fileVideo: File,
//     lesson: string,
// ) => {
//     const formData = new FormData();
//     formData.append("file", fileVideo);
//     formData.append("file", photoCourse);
//     formData.append("profession", profession);
//     formData.append("author", author);
//     formData.append("price", price);
//     formData.append("smallDescription", shotDescription);
//     formData.append("fullDescription", fullDescription);
//     formData.append("lesson", lesson);
//     formData.append("module", module);

//     return async () => {
//         try {
//             await CoursesApi.uploadCourse(formData);
//         } catch (e) {
//             console.log(e);
//         }
//     };
// };

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

// THUNK

// export const fetchGetCourses = (): ThunkType => {
//     return async (dispatch: DispatchType) => {
//         dispatch(setLoading());
//         try {
//             const data = await CoursesApi.getCourses();
//             dispatch(setCourses(data.courses));
//             dispatch(setLoaded());
//         } catch (e) {
//             console.log(e);
//         }
//     };
// };

export function* fetchGetCoursesRequest() {
    try {
        const data = yield call(CoursesApi.getCourses);
        yield put(setCourses(data.courses));
        yield put(setLoaded());
    } catch (e) {
        yield console.log(e);
    }
};

// THUNK

// export const fetchDeleteCourse = (courseId: string, photo: string): ThunkType => {
//     return async (dispatch: DispatchType) => {
//         try {
//             await CoursesApi.deleteCourse(courseId, photo);
//             dispatch(deleteCourseAction(courseId));
//             dispatch(deleteFilterByDirections(courseId));
//         } catch (e) {
//             console.log(e);
//         }
//     };
// };

export function* fetchDeleteCourseRequest({payload}: FetchDeleteCourseType) {
    try {
        yield call(CoursesApi.deleteCourse, payload);
        yield put((deleteCourseAction(payload.courseId)));
        yield put((deleteFilterByDirections(payload.courseId)));
    } catch (e) {
        yield console.log(e);
    }
};

export function* CoursesSaga() {
    yield takeLatest(CoursesActionType.FETCH_UPLOAD_NEW_COURSE, fetchUploadNewCourseRequest);
    yield takeLatest(CoursesActionType.FETCH_GET_COURSES, fetchGetCoursesRequest);
    yield takeLatest(CoursesActionType.FETCH_DELETE_COURSE, fetchDeleteCourseRequest);
}


