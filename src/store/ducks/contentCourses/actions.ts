import { CoursesContentType, LessonTimeIdsType } from "./reducer";
import {
    AddCourseContentActionType,
    CourseContentActionsType,
    FetchGetAllTeacherCoursesType,
    FetchGetCourseContentType,
    FetchUploadCourseContentType,
    FetchUploadLessonType,
    SetAllTeacherCoursesActionType,
    SetCourseContentActionType,
    SetTimeLesson,
    SetVideoNameActionType,
    FetchDeleteLessonType,
    FetchSendLinksToResourcesType,
    FetchSetTimeModuleAndLessonsType,
    FetchLessonTitleRevisionType
} from "./types";

// FETCH ACTIONS

export const fetchUploadCourseContent = (payload: {
    courseId: string;
    file: any;
    lesson: string;
    module: string;
}): FetchUploadCourseContentType => {
    return {
        type: CourseContentActionsType.FETCH_UPLOAD_COURSE_CONTENT,
        payload,
    };
};

export const fetchUploadLesson = (payload: {
    courseId: string;
    file: any;
    lesson: string;
    moduleId: string;
}): FetchUploadLessonType => {
    return {
        type: CourseContentActionsType.FETCH_UPLOAD_LESSON_TYPE,
        payload,
    };
};

export const fetchGetCourseContent = (
    payload: string
): FetchGetCourseContentType => {
    return {
        type: CourseContentActionsType.FETCH_GET_COURSE_CONTENT,
        payload,
    };
};

export const fetchGetAllTeacherCourses = (): FetchGetAllTeacherCoursesType => {
    return {
        type: CourseContentActionsType.FETCH_GET_ALL_TEACHER_CCOURSES,
    };
};

export const fetchDeleteLesson = (payload: {
    courseId: string;
    moduleId: string;
    lessonId: string;
    videoName: string;
    hours: number;
    minutes: number;
    seconds: number;
}): FetchDeleteLessonType => {
    return {
        type: CourseContentActionsType.DELETE_LESSON,
        payload,
    };
};

export const fetchLessonTitleRevision = (payload: {
    newTitle: string;
    courseId: string;
    moduleId: string;
    lessonId: string;
}): FetchLessonTitleRevisionType => {
    return {
        type: CourseContentActionsType.FETCH_LESSON_TITLE_REVISION,
        payload
    };
};

export const fetchSendLinksToResources = (payload: {
    courseId: string;
    moduleId: string;
    lessonId: string;
    linkName: string;
    linksToResources: string;
}): FetchSendLinksToResourcesType => {
    return {
        type: CourseContentActionsType.FETCH_SEND_LINKS_TO_RESOURSES,
        payload,
    };
};

export const fetchSetTimeModuleAndLessons = (payload: {
    courseId: string;
    moduleId: string | undefined;
    lessonId: string | undefined;
    hours: number;
    minutes: number;
    seconds: number;
}): FetchSetTimeModuleAndLessonsType => {
    return {
        type: CourseContentActionsType.FETCH_SET_TIME_MODULE_AND_LESSONS,
        payload,
    };
};

// ACTIONS

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

export const setTimeLesson = (
    courseId: string | null,
    moduleId: string,
    lessonId: string
): SetTimeLesson => {
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
    | SetTimeLesson;
