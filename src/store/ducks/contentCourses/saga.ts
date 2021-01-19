import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { CourseContentApi } from "../../../services/api/courseContentApi";
import { AppStateType } from "../../store";
import {
    CourseContentActions,
    setAllTeacherCourses,
    setCourseContent,
} from "./actions";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { CourseContentActionsType, FetchDeleteLessonType, FetchGetCourseContentType, FetchLessonTitleRevisionType, FetchSendLinksToResourcesType, FetchSetTimeModuleAndLessonsType, FetchUploadCourseContentType, FetchUploadLessonType } from "./types";

type DispatchType = Dispatch<CourseContentActions>;

type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    CourseContentActions
>;

// for saga

// THUNK

// export const fetchUploadCourseContent = (courseId: string, file: any, lesson: string, module: string): ThunkType => {
//     return async (dispatch: DispatchType) => {
//         try {
//             const data = await CourseContentApi.uploadContent(courseId, file, lesson, module);
//             dispatch(setCourseContent(data));
//         } catch (e) {
//             console.log(e);
//         }
//     };
// };


export function* fetchUploadCourseContentRequest({payload}: FetchUploadCourseContentType) {
    try {
        const data = yield call(CourseContentApi.uploadContent, payload);
        yield put(setCourseContent(data));
    } catch (e) {
        console.log(e);
    }
};

// THUNK

// export const fetchUploadLesson = (courseId: string, file: any,lesson: string,moduleId: string): ThunkType => {
//     return async (dispatch: DispatchType) => {
//         try {
//             const data = await CourseContentApi.fetchUploadLesson(
//                 courseId,
//                 file,
//                 lesson,
//                 moduleId
//             );
//             dispatch(setCourseContent(data));
//         } catch (e) {
//             console.log(e);
//         }
//     };
// };

export function* fetchUploadLessonRequest({payload}: FetchUploadLessonType) {
    try {
        const data = yield call(CourseContentApi.fetchUploadLesson, payload);
        yield put(setCourseContent(data));
    } catch (e) {
        console.log(e);
    }
};

// THUNK

// export const fetchGetCourseContent = (courseId: string): ThunkType => {
//     return async (dispatch: DispatchType) => {
//         try {
//             const data = await CourseContentApi.getCourseCoutent(courseId);
//             dispatch(setCourseContent(data));
//         } catch (e) {
//             console.log(e);
//         }
//     };
// };

export function* fetchGetCourseContentRequest({payload}: FetchGetCourseContentType) {
    try {
        const data = yield call(CourseContentApi.getCourseCoutent, payload);
        yield put(setCourseContent(data));
    } catch (e) {
        yield console.log(e);
    }
};

// THUNK

// export const fetchGetAllTeacherCourses = (): ThunkType => {
//     return async (dispatch: DispatchType) => {
//         try {
//             const data = await CourseContentApi.getAllTeacherCourses();
//             dispatch(setAllTeacherCourses(data));

//         } catch (e) {
//             console.log(e);
//         }
//     };
// };

export function* fetchGetAllTeacherCoursesRequest() {
    try {
        const data = yield call(CourseContentApi.getAllTeacherCourses);
        yield put(setAllTeacherCourses(data));
    } catch (e) {
        yield console.log(e);
    }
};

// THUNK

// export const fetchDeleteLesson = (
//     courseId: string,
//     moduleId: string,
//     lessonId: string,
//     videoName: string,
//     hours: number,
//     minutes: number,
//     seconds: number
// ): ThunkType => {
//     return async (dispatch: DispatchType) => {
//         try {
//             const data = await CourseContentApi.deleteLesson(
//                 courseId,
//                 moduleId,
//                 lessonId,
//                 videoName,
//                 hours,
//                 minutes,
//                 seconds
//             );
//             dispatch(setCourseContent(data));
//         } catch (e) {
//             console.log(e);
//         }
//     };
// };

export function* fetchDeleteLessonRequest({payload}: FetchDeleteLessonType) {
    try {
        const data = yield call(CourseContentApi.deleteLesson, payload);
        yield put(setCourseContent(data));
    } catch (e) {
        yield console.log(e);
    }
};

// THUNK

// export const lessonTitleRevision = (
//     newTitle: string,
//     courseId: string,
//     moduleId: string,
//     lessonId: string
// ): ThunkType => {
//     return async (dispatch: DispatchType) => {
//         try {
//             const data = await CourseContentApi.lessonTitleRevision(
//                 newTitle,
//                 courseId,
//                 moduleId,
//                 lessonId
//             );
//             dispatch(setCourseContent(data));
//         } catch (e) {
//             console.log(e);
//         }
//     };
// };

export function* fetchLessonTitleRevisionRequest({payload}: FetchLessonTitleRevisionType) {
    try {
        const data = yield call(CourseContentApi.lessonTitleRevision, payload);
        yield put(setCourseContent(data));
    } catch (e) {
        yield console.log(e);
    }
};

// THUNK

// export const fetchSendLinksToResources = (
//     courseId: string,
//     moduleId: string,
//     lessonId: string,
//     linkName: string,
//     linksToResources: string
// ): ThunkType => {
//     return async (dispatch: DispatchType)  => {
//         try {
//             const data = await CourseContentApi.sendLinksToResources(courseId, moduleId, lessonId, linkName, linksToResources);
//             dispatch(setCourseContent(data));
//         } catch (e) {
//             console.log(e);
//         }
//     };
// };

export function* fetchSendLinksToResourcesRequest({payload}: FetchSendLinksToResourcesType) {
    try {
        const data = yield call(CourseContentApi.sendLinksToResources, payload);
        yield put(setCourseContent(data));
    } catch (e) {
        yield console.log(e);
    }
};

// THUNK

// export const fetchSetTimeModuleAndLessons = (
//     courseId: string,
//     moduleId: string | undefined,
//     lessonId: string | undefined,
//     hours: number,
//     minutes: number,
//     seconds: number,
// ): ThunkType => {
//     return async (dispatch: DispatchType) => {
//         try {
//             const data = await CourseContentApi.setTimeModuleAndLessons(
//                 courseId,
//                 moduleId,
//                 lessonId,
//                 hours,
//                 minutes,
//                 seconds,
//             )
//             dispatch(setCourseContent(data));
//         } catch (e) {
//             console.log(e);
//         }
//     };
// };


export function* fetchSetTimeModuleAndLessonsRequest({payload}: FetchSetTimeModuleAndLessonsType){
    try {
        const data = yield call(CourseContentApi.setTimeModuleAndLessons, payload);
        yield put(setCourseContent(data));
    } catch (e) {
        console.log(e);
    }
};
export function* ContentCourseSaga() {
    yield takeLatest(CourseContentActionsType.FETCH_UPLOAD_COURSE_CONTENT, fetchUploadCourseContentRequest);
    yield takeLatest(CourseContentActionsType.FETCH_UPLOAD_LESSON_TYPE, fetchUploadLessonRequest);
    yield takeLatest(CourseContentActionsType.FETCH_GET_COURSE_CONTENT, fetchGetCourseContentRequest);
    yield takeLatest(CourseContentActionsType.FETCH_GET_ALL_TEACHER_CCOURSES, fetchGetAllTeacherCoursesRequest);
    yield takeLatest(CourseContentActionsType.DELETE_LESSON, fetchDeleteLessonRequest);
    yield takeLatest(CourseContentActionsType.FETCH_LESSON_TITLE_REVISION, fetchLessonTitleRevisionRequest);
    yield takeLatest(CourseContentActionsType.FETCH_SEND_LINKS_TO_RESOURSES, fetchSendLinksToResourcesRequest);
    yield takeLatest(CourseContentActionsType.FETCH_SET_TIME_MODULE_AND_LESSONS, fetchSetTimeModuleAndLessonsRequest);
}