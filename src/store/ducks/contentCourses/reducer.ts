import produce, { Draft } from "immer";
import { CourseContentActions } from "./actions";
import { CourseContentActionsType } from "./types";

type LinksToResourcesType = {
    _id: string;
    linkName: string;
    linksToResources: string;
};

type ModuleContentType = {
    _id: string;
    fileVideo: string;
    lesson: string;
    lessonTime: string;
    linksToResources: LinksToResourcesType[];
}

type ContentType = {
    _id: string;
    module: string;
    moduleHours: number;
    moduleMinutes: number;
    moduleSeconds: number;
    moduleContent: ModuleContentType[]
}

export type CoursesContentType = {
    _id: string;
    user: string;
    photo: string;
    profession: string;
    author: string;
    price: string;
    smallDescription: string;
    fullDescription: string;
    content: ContentType[];
    __v: number;
    videoName: string;
    lessonTime: string;
};

export type LessonTimeIdsType = {
    courseId: string,
    moduleId: string,
    lessonId: string,
}

export type CoursesContentStateType = {
    courseContent: CoursesContentType | null;
    videoName: string;
    lessonTime: LessonTimeIdsType | null;
    allTeacherCourses: CoursesContentType[];
};

const initialState: CoursesContentStateType = {
    courseContent: null,
    videoName: "",
    lessonTime: null,
    allTeacherCourses: [],
};

const contentCoursesReducer = produce(
    (draftState: Draft<CoursesContentStateType>, action: CourseContentActions) => {
        switch (action.type) {
            case CourseContentActionsType.ADD_COURSE_CONTENT:
                draftState.courseContent = action.payload;
                break;
            case CourseContentActionsType.SET_COURSE_CONTENT:
                draftState.courseContent = action.payload;
                break;
            case  CourseContentActionsType.SET_VIDEO_NAME:
                draftState.videoName = action.payload;
                break;
            case CourseContentActionsType.SET_TIME_LESSON:
                draftState.lessonTime = { ...action.payload };
                break;
            case CourseContentActionsType.SET_ALL_TEACHER_COURSES:
                draftState.allTeacherCourses = action.payload;
                break;
            default:
                break;
        }
    },
    initialState
);

export default contentCoursesReducer;
