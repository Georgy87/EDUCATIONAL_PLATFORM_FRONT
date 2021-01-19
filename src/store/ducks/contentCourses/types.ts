import { CoursesContentType, LessonTimeIdsType } from "./reducer";

export enum CourseContentActionsType {
    FETCH_UPLOAD_COURSE_CONTENT = "FETCH-UPLOAD-COURSE-CONTENT",
    FETCH_UPLOAD_LESSON_TYPE = "FETCH-UPLOAD-LESSON-TYPE",
    FETCH_GET_COURSE_CONTENT = "FETCH-GET-COURSE-CONTENT",
    FETCH_GET_ALL_TEACHER_CCOURSES = "FETCH-GET-ALL-TEACHER-CCOURSES",
    FETCH_LESSON_TITLE_REVISION = "FETCH_LESSON_TITLE_REVISION",
    FETCH_SEND_LINKS_TO_RESOURSES = "FETCH-SEND-LINKS-TO-RESOURSES",
    FETCH_SET_TIME_MODULE_AND_LESSONS = "FETCH-SET-TIME-MODULE-AND-LESSONS",
    DELETE_LESSON = "DELETE-LESSON",
    ADD_COURSE_CONTENT = "ADD-COURSE-CONTENT",
    SET_COURSE_CONTENT = "SET-COURSE-CONTENT",
    SET_ALL_TEACHER_COURSES = "SET-ALL-TEACHER-COURSES",
    SET_VIDEO_NAME = "SET-VIDEO-NAME",
    SET_TIME_LESSON = "SET-TIME-LESSON",
}

// FETCH TYPES

export type FetchUploadCourseContentType = {
    type: CourseContentActionsType.FETCH_UPLOAD_COURSE_CONTENT;
    payload: { courseId: string; file: any; lesson: string; module: string };
};

export type FetchUploadLessonType = {
    type: CourseContentActionsType.FETCH_UPLOAD_LESSON_TYPE;
    payload: { courseId: string; file: any; lesson: string; moduleId: string };
};

export type FetchGetCourseContentType = {
    type: CourseContentActionsType.FETCH_GET_COURSE_CONTENT;
    payload: string;
};

export type FetchGetAllTeacherCoursesType = {
    type: CourseContentActionsType.FETCH_GET_ALL_TEACHER_CCOURSES;
};

export type FetchDeleteLessonType = {
    type: CourseContentActionsType.DELETE_LESSON;
    payload: {
        courseId: string;
        moduleId: string;
        lessonId: string;
        videoName: string;
        hours: number;
        minutes: number;
        seconds: number;
    };
};

export type FetchLessonTitleRevisionType = {
    type: CourseContentActionsType.FETCH_LESSON_TITLE_REVISION,
    payload: {
        newTitle: string;
        courseId: string;
        moduleId: string;
        lessonId: string;
    }
}

export type FetchSendLinksToResourcesType = {
    type: CourseContentActionsType.FETCH_SEND_LINKS_TO_RESOURSES,
    payload: {
        courseId: string;
        moduleId: string;
        lessonId: string;
        linkName: string;
        linksToResources: string;
    },
};

export type FetchSetTimeModuleAndLessonsType = {
    type: CourseContentActionsType.FETCH_SET_TIME_MODULE_AND_LESSONS,
    payload: {
        courseId: string;
        moduleId: string | undefined;
        lessonId: string | undefined;
        hours: number;
        minutes: number;
        seconds: number;
    }
}

// ACTIONS TYPES

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
    payload: LessonTimeIdsType;
};
