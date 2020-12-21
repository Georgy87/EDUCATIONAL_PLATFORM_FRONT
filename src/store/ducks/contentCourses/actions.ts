import { CoursesContentType } from "./reducer";

export enum CourseContentActions {
    ADD_COURSE_CONTENT = "ADD-COURSE-CONTENT",
    SET_COURSE_CONTENT = "SET-COURSE-CONTENT",
    SET_ALL_TEACHER_COURSES = "SET-ALL-TEACHER-COURSES",
    SET_VIDEO_NAME = "SET-VIDEO-NAME",
    SET_TIME_LESSON = "SET-TIME-LESSON"
}

export type AddCourseContentActionType = {
    type:  CourseContentActions.ADD_COURSE_CONTENT,
    payload: CoursesContentType,
}

export type SetCourseContentActionType = {
    type:  CourseContentActions.SET_COURSE_CONTENT,
    payload: CoursesContentType,
}

export type SetAllTeacherCoursesActionType = {
    type: CourseContentActions.SET_ALL_TEACHER_COURSES,
    payload: CoursesContentType[],
}

export type SetVideoNameActionType = {
    type: CourseContentActions.SET_VIDEO_NAME,
    payload: string,
}

export type SetTimeLesson = {
    type: CourseContentActions.SET_TIME_LESSON,
    payload:  {
        courseId: string,
        moduleId: string,
        lessonId: string,
    }
}

export const addCourseContent = (content: CoursesContentType): AddCourseContentActionType => {
    return {
        type: CourseContentActions.ADD_COURSE_CONTENT,
        payload: content,
    };
};

export const setCourseContent = (content: CoursesContentType): SetCourseContentActionType => {
    return {
        type: CourseContentActions.SET_COURSE_CONTENT,
        payload: content,
    };
};

export const setAllTeacherCourses = (content: CoursesContentType[]): SetAllTeacherCoursesActionType => {
    return {
        type: CourseContentActions.SET_ALL_TEACHER_COURSES,
        payload: content
    };
};

export const setVideoName = (videoName: string): SetVideoNameActionType  => {
    return {
        type: CourseContentActions.SET_VIDEO_NAME,
        payload: videoName,
    };
};

export const setTimeLesson = (courseId: string, moduleId: string, lessonId: string): SetTimeLesson => {
    return {
        type: CourseContentActions.SET_TIME_LESSON,
        payload: {
            courseId,
            moduleId,
            lessonId,
        },
    };
};
