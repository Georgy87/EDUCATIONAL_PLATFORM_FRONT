import { CoursesContentType, LessonTimeIdsType } from "./reducer";

export enum CourseContentActionsType {
    ADD_COURSE_CONTENT = "ADD-COURSE-CONTENT",
    SET_COURSE_CONTENT = "SET-COURSE-CONTENT",
    SET_ALL_TEACHER_COURSES = "SET-ALL-TEACHER-COURSES",
    SET_VIDEO_NAME = "SET-VIDEO-NAME",
    SET_TIME_LESSON = "SET-TIME-LESSON",
}

export type AddCourseContentActionType = {
    type: CourseContentActionsType.ADD_COURSE_CONTENT;
    payload: CoursesContentType;
};

export type SetCourseContentActionType = {
    type: CourseContentActionsType.SET_COURSE_CONTENT;
    payload: CoursesContentType;
};

export type SetAllTeacherCoursesActionType = {
    type: CourseContentActionsType.SET_ALL_TEACHER_COURSES;
    payload: CoursesContentType[];
};

export type SetVideoNameActionType = {
    type: CourseContentActionsType.SET_VIDEO_NAME;
    payload: string;
};

export type SetTimeLesson = {
    type: CourseContentActionsType.SET_TIME_LESSON;
    payload: LessonTimeIdsType
};