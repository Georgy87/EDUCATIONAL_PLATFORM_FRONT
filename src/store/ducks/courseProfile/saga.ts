import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { CourseProfileApi } from "../../../services/api/courseProfileApi";
import { AppStateType } from "../../store";
import { actions, CourseProfileActions } from "./actions";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { CourseProfileActionsType, FetchGetProfileCourseType, FetchGetTeacherType } from "./types";

type DispatchType = Dispatch<CourseProfileActions>;
type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    CourseProfileActions
>;

// THUNK

// export const fetchGetProfileCourse= (courseId: string): ThunkType  => {
//     return async (dispatch: DispatchType) => {
//         try {
//             actions.setUserLoading();
//             const data = await CourseProfileApi.getProfile(courseId);
//             if (data) {
//                 const newData = data;
//                 const module = newData.content[0];
//                 const lesson = module.moduleContent[0];
//                 const lessonVideo = lesson.fileVideo;
//                 dispatch(actions.setCourseProfileVideo(lessonVideo));
//             }
//             dispatch(actions.setCourseProfile(data));
//             actions.setUserLoaded();
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };

export function* fetchGetProfileCourseRequest({payload}: FetchGetProfileCourseType) {
    try {
        yield put(actions.setUserLoading());
        const data = yield call(CourseProfileApi.getProfile, payload);
        if (data) {
            const newData = data;
            const module = newData.content[0];
            const lesson = module.moduleContent[0];
            const lessonVideo = lesson.fileVideo;
            yield put(actions.setCourseProfileVideo(lessonVideo));
        }
        yield put(actions.setCourseProfile(data));
        actions.setUserLoaded();
    } catch (error) {
        yield console.log(error);
    }
};

// THUNK

// export const fetchGetTeacher = (teacherId: string | undefined): ThunkType  => {
//     return async (dispatch: DispatchType) => {
//         try {
//             const data = await CourseProfileApi.getTeacher(teacherId);
//             dispatch(actions.setTeacher(data));
//         } catch (error) {
//             console.log({error: `Get teacher ${error}`});
//         }
//     }
// }

export function* fetchGetTeacherRequest({payload}: FetchGetTeacherType) {
    try {
        const data = yield call(CourseProfileApi.getTeacher, payload);
        yield put(actions.setTeacher(data));
    } catch (error) {
        yield  console.log({error: `Get teacher ${error}`});
    }
}

export function* CourseProfileSaga() {
    yield takeLatest(CourseProfileActionsType.FETCH_GET_PROFILE_COURSE, fetchGetProfileCourseRequest);
    yield takeLatest(CourseProfileActionsType.FETCH_GET_PROFILE_COURSE, fetchGetProfileCourseRequest);
    yield takeLatest(CourseProfileActionsType.FETCH_GET_TEACHER, fetchGetTeacherRequest);
}

