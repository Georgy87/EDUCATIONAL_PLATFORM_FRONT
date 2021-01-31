import { CourseProfileStateType } from "../courseProfile/types";
import { DeleteFilterByDirectionsActionType } from "../directions/types";
import { UserInfoType, UserType } from "../user/types";

export enum LoadingStateType {
    LOADED = "LOADED",
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER",
}

export enum CoursesActionType {
    FETCH_UPLOAD_NEW_COURSE = "FETCH_UPLOAD_NEW_COURSE",
    FETCH_GET_COURSES = "FETCH-GET-COURSES",
    FETCH_DELETE_COURSE = "FETCH-DELETE-COURSE",
    FETCH_COURSE_FOR_TRAINING = "FETCH_COURSE_FOR_TRAINING",
    SET_COURSES_LOADING = "SET-COURSES-LOADING",
    SET_COURSES = "SET-COURSES",
    SET_COURSES_LOADED = "SET-COURSES-LOADED",
    DELETE_COURSE = "DELETE-COURSE",
    COURSE_FOR_TRAINING = "COURSE_FOR_TRAINING",
    SET_COURSE_FOR_TRAINING = "SET_COURSE_FOR_TRAINING",
    LOADING_FOR_TRAINING = "LOADING_FOR_TRAINING",
    ALL_VIDEO_LIST = "ALL_VIDEO_LIST",
    VIDEO_FOR_PLEER = "VIDEO_FOR_PLEER",
    VIDEO_BY_CLICK = "VIDEO_BY_CLICK",
    FETCH_GET_COMMENTS = "FETCH_GET_COMMENTS",
    SET_COMMENTS = "SET_COMMENTS",
    SET_COMMENTS_LOADING = "SET_COMMENTS_LOADING",
    FETCH_ADD_COMMENT = "FETCH_ADD_COMMENT",
    FETCH_GET_REPLY_TO_COMMENT = "FETCH_GET_REPLY_TO_COMMENT",
    GET_REPLY_TO_COMMENT = "GET_REPLY_TO_COMMENT",
    ADD_COMMENT_LOADING = "ADD_COMMENT_LOADING"
}

// STATE TYPES

export type RepliesToCommentType = {
    _id: string;
    text: string;
    user: UserInfoType;
    created: string;
};

export type GetCommentsType = {
    _id: string;
    text: string;
    user: UserInfoType;
    created: string;
    comments: RepliesToCommentType[];
};

export type CoursesStateType = {
    courses: CourseProfileStateType[];
    isFilter: boolean;
    loadingState: LoadingStateType;
    courseForTraining: CourseProfileStateType | null;
    loadingCourseForTraining: Boolean;
    courseVideosList: string[];
    videoForPleer: string | undefined;
    comments: GetCommentsType[];
    loadingComments: Boolean;
    replyToComment: any;
    loadingAddComment: string;
};

// FETCH ACTIONS TYPES

export type FetchGetCoursesType = {
    type: CoursesActionType.FETCH_GET_COURSES;
};

export type FetchUploadNewCourseType = {
    type: CoursesActionType.FETCH_UPLOAD_NEW_COURSE;
    payload: {
        photoCourse: File;
        profession: string;
        author: string;
        price: string;
        shotDescription: string;
        fullDescription: string;
        module: string;
        fileVideo: File;
        lesson: string;
    };
};

export type FetchDeleteCourseType = {
    type: CoursesActionType.FETCH_DELETE_COURSE;
    payload: { courseId: string; photo: string };
};

export type FetchGetCourseForTrainingType = {
    type: CoursesActionType.FETCH_COURSE_FOR_TRAINING;
    payload: string;
};

export type FetchGetCommentsType = {
    type: CoursesActionType.FETCH_GET_COMMENTS;
    payload: string;
};

export type FetchAddCommentType = {
    type: CoursesActionType.FETCH_ADD_COMMENT;
    payload: { courseId: string; text: string };
};

export type FetchGetReplyToCommentType = {
    type: CoursesActionType.FETCH_GET_REPLY_TO_COMMENT;
    payload: { courseId: string; commentId: string };
};

// ACTIONS TYPES

export type SetLoadingActionType = {
    type: CoursesActionType.SET_COURSES_LOADING;
};

export type SetCoursesActionType = {
    type: CoursesActionType.SET_COURSES;
    payload: Array<CourseProfileStateType>;
};

export type SetLoadedActionType = {
    type: CoursesActionType.SET_COURSES_LOADED;
};

export type SetDeleteActionType = {
    type: CoursesActionType.DELETE_COURSE;
    payload: string;
};

export type SetCourseForTrainingType = {
    type: CoursesActionType.SET_COURSE_FOR_TRAINING;
    payload: CourseProfileStateType;
};

export type SetLoadingCourseForTrainingType = {
    type: CoursesActionType.LOADING_FOR_TRAINING;
};

export type SetCourseVideosType = {
    type: CoursesActionType.ALL_VIDEO_LIST;
    payload: { video: string[]; indexLesson: number | undefined };
};

export type SetVideoForPleerType = {
    type: CoursesActionType.VIDEO_FOR_PLEER;
    payload: number;
};

export type SetVideoForPleerByClickType = {
    type: CoursesActionType.VIDEO_BY_CLICK;
    payload: string;
};

export type SetCommentsType = {
    type: CoursesActionType.SET_COMMENTS;
    payload: GetCommentsType[];
};

export type SetLoadingCommentsType = {
    type: CoursesActionType.SET_COMMENTS_LOADING;
    payload: boolean;
};

export type AddCommentLoadingType = {
    type: CoursesActionType.ADD_COMMENT_LOADING;
    payload: string;
};

export type GetReplyToCommentType = {
    type: CoursesActionType.GET_REPLY_TO_COMMENT;
    payload: string;
};

export type CoursesActions =
    | SetLoadingActionType
    | SetCoursesActionType
    | SetLoadedActionType
    | SetDeleteActionType
    | DeleteFilterByDirectionsActionType
    | SetCourseForTrainingType
    | SetLoadingCourseForTrainingType
    | FetchGetCourseForTrainingType
    | SetCourseVideosType
    | SetVideoForPleerType
    | SetVideoForPleerByClickType
    | SetCommentsType
    | FetchGetCommentsType
    | SetLoadingCommentsType
    | FetchAddCommentType
    | GetReplyToCommentType
    | AddCommentLoadingType;
