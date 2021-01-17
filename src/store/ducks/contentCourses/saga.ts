import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { CourseContentApi } from "../../../services/api/courseContentApi";
import { AppStateType } from "../../store";
import {
    CourseContentActions,
    setAllTeacherCourses,
    setCourseContent,
} from "./actions";

type DispatchType = Dispatch<CourseContentActions>;
type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    CourseContentActions
>;

export const uploadCourseContent = (courseId: string | null, file: any, lesson: string, module: string): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const data = await CourseContentApi.uploadContent(courseId, file, lesson, module);
            dispatch(setCourseContent(data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const uploadLesson = (courseId: string, file: any,lesson: string,moduleId: string): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const data = await CourseContentApi.uploadLesson(
                 courseId,
                file,
                lesson,
                moduleId
            );
            dispatch(setCourseContent(data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const getCourseContent = (courseId: string | null): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const data = await CourseContentApi.getCourseCoutent(courseId);
            dispatch(setCourseContent(data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const getAllTeacherCourses = (): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const data = await CourseContentApi.getAllTeacherCourses();
            dispatch(setAllTeacherCourses(data));

        } catch (e) {
            console.log(e);
        }
    };
};

export const deleteLesson = (
    courseId: string,
    moduleId: string,
    lessonId: string,
    videoName: string,
    hours: number,
    minutes: number,
    seconds: number
): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const data = await CourseContentApi.deleteLesson(
                courseId,
                moduleId,
                lessonId,
                videoName,
                hours,
                minutes,
                seconds
            );
            dispatch(setCourseContent(data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const lessonTitleRevision = (
    newTitle: string,
    courseId: string,
    moduleId: string,
    lessonId: string
): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const data = await CourseContentApi.lessonTitleRevision(
                newTitle,
                courseId,
                moduleId,
                lessonId
            );
            dispatch(setCourseContent(data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const sendLinksToResources = (
    courseId: string,
    moduleId: string,
    lessonId: string,
    linkName: string,
    linksToResources: string
): ThunkType => {
    return async (dispatch: DispatchType)  => {
        try {
            const data = await CourseContentApi.sendLinksToResources(courseId, moduleId, lessonId, linkName, linksToResources);
            dispatch(setCourseContent(data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const setTimeModuleAndLessons = (
    courseId: string | undefined,
    moduleId: string | undefined,
    lessonId: string | undefined,
    hours: number,
    minutes: number,
    seconds: number
): ThunkType => {
    return async (dispatch: DispatchType) => {
        try {
            const data = await CourseContentApi.setTimeModuleAndLessons(
                courseId,
                moduleId,
                lessonId,
                hours,
                minutes,
                seconds,
            )
            dispatch(setCourseContent(data));
        } catch (e) {
            console.log(e);
        }
    };
};
