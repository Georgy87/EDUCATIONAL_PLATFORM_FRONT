import { CoursesContentType, LessonTimeIdsType } from "./reducer";
import { AddCourseContentActionType, CourseContentActionsType, SetAllTeacherCoursesActionType, SetCourseContentActionType, SetTimeLesson, SetVideoNameActionType } from "./types";


export const addCourseContent = (
    content: CoursesContentType
): AddCourseContentActionType => {
    return {
        type: CourseContentActionsType.ADD_COURSE_CONTENT,
        payload: content,
    };
};

export const setCourseContent = (
    content: CoursesContentType
): SetCourseContentActionType => {
    return {
        type: CourseContentActionsType.SET_COURSE_CONTENT,
        payload: content,
    };
};

export const setAllTeacherCourses = (
    content: CoursesContentType[]
): SetAllTeacherCoursesActionType => {
    return {
        type: CourseContentActionsType.SET_ALL_TEACHER_COURSES,
        payload: content,
    };
};

export const setVideoName = (videoName: string): SetVideoNameActionType => {
    return {
        type: CourseContentActionsType.SET_VIDEO_NAME,
        payload: videoName,
    };
};

export const setTimeLesson = (courseId: string | null, moduleId: string, lessonId: string,): SetTimeLesson => {
    return {
        type: CourseContentActionsType.SET_TIME_LESSON,
        payload: {
            courseId,
            moduleId,
            lessonId,
        },
    };
};

export type CourseContentActions =
    | AddCourseContentActionType
    | SetCourseContentActionType
    | SetAllTeacherCoursesActionType
    | SetVideoNameActionType
    | SetTimeLesson
