import { CourseProfileStateType } from "../courseProfile/types";
import { CoursesActionType, SetCourseVideosType, FetchUploadNewCourseType, FetchGetCoursesType, SetCoursesActionType, SetDeleteActionType, SetLoadedActionType, SetLoadingActionType, FetchDeleteCourseType, SetCourseForTrainingType, FetchGetCourseForTrainingType, SetLoadingCourseForTrainingType, SetVideoForPleerType, SetVideoForPleerByClickType, FetchGetCommentsType, GetCommentsType, SetCommentsType, SetLoadingCommentsType, FetchAddCommentType, FetchGetReplyToCommentType, SetReplyToCommentType, AddCommentLoadingType, FetchAddReplyToCommentType, AddReplyToCommentLoadingType, ReplyToCommentLoadingType } from "./types";

// FETCH ACTIONS

export const fetchUploadNewCourse = (payload: {
    photoCourse: File,
    profession: string,
    author: string,
    price: string,
    shotDescription: string,
    fullDescription: string,
    module: string,
    fileVideo: File,
    lesson: string,
}): FetchUploadNewCourseType => {
    return {
        type:  CoursesActionType.FETCH_UPLOAD_NEW_COURSE,
        payload
    }
}

export const fetchGetCourses = (): FetchGetCoursesType => {
    return {
        type: CoursesActionType.FETCH_GET_COURSES
    }
}

export const fetchDeleteCourse = (payload: { courseId: string; photo: string }): FetchDeleteCourseType => {
    return {
        type: CoursesActionType.FETCH_DELETE_COURSE,
        payload
    }
}

export const fetchGetCourseForTraining = (payload: string): FetchGetCourseForTrainingType => {
    return {
        type: CoursesActionType.FETCH_COURSE_FOR_TRAINING,
        payload
    }
}

export const fetchGetComments = (payload: string): FetchGetCommentsType => {
    return {
        type: CoursesActionType.FETCH_GET_COMMENTS,
        payload
    }
}

export const fetchAddComment = (payload: { courseId: string; text: string; commentPhoto: any }): FetchAddCommentType => {
    return {
        type: CoursesActionType.FETCH_ADD_COMMENT,
        payload
    }
}

export const fetchGetReplyToComment = ( payload: { courseId: string; commentId: string }): FetchGetReplyToCommentType => {
    return {
        type: CoursesActionType.FETCH_GET_REPLY_TO_COMMENT,
        payload
    }
}

export const fetchAddReplyToComment = (payload: { courseId: string; commentId: string; text: string }): FetchAddReplyToCommentType => {
    return {
        type: CoursesActionType.FETCH_ADD_REPLY_TO_COMMENT,
        payload
    }
};

// ACTIONS

export const setLoading = (): SetLoadingActionType => {
    return {
        type: CoursesActionType.SET_COURSES_LOADING,
    };
};

export const setCourses = (payload: Array<CourseProfileStateType>): SetCoursesActionType => {
    return {
        type: CoursesActionType.SET_COURSES,
        payload
    };
};

export const setLoaded = (): SetLoadedActionType => {
    return {
        type: CoursesActionType.SET_COURSES_LOADED,
    };
};

export const deleteCourseAction = (payload: string): SetDeleteActionType => {
    return {
        type: CoursesActionType.DELETE_COURSE,
        payload,
    };
};

export const setCourseForTraining = (payload: CourseProfileStateType): SetCourseForTrainingType => {
    return {
        type: CoursesActionType.SET_COURSE_FOR_TRAINING,
        payload
    }
}

export const setLoadingCourseForTraining = (): SetLoadingCourseForTrainingType => {
    return {
        type: CoursesActionType.LOADING_FOR_TRAINING,
    }
}

export const setCourseVideos = (payload: { video: string[], indexLesson: number | undefined }): SetCourseVideosType => {
    return {
        type: CoursesActionType.ALL_VIDEO_LIST,
        payload
    }
}

export const setVideoForPleer = (payload: number): SetVideoForPleerType => {
    return {
        type: CoursesActionType.VIDEO_FOR_PLEER,
        payload
    }
}

export const setVideoForPleerByClick = (payload: string): SetVideoForPleerByClickType => {
    return {
        type: CoursesActionType.VIDEO_BY_CLICK,
        payload
    }
}

export const setComments = (payload: GetCommentsType[]): SetCommentsType => {
    return {
        type: CoursesActionType.SET_COMMENTS,
        payload
    }
}

export const setCommentsLoading = (payload: boolean): SetLoadingCommentsType => {
    return {
        type: CoursesActionType.SET_COMMENTS_LOADING,
        payload
    }
}

export const addCommentsLoading = (payload: string): AddCommentLoadingType => {
    return {
        type: CoursesActionType.ADD_COMMENT_LOADING,
        payload
    }
}

export const setReplyToComment = (payload: GetCommentsType): SetReplyToCommentType => {
    return {
        type: CoursesActionType.SET_REPLY_TO_COMMENT,
        payload
    }
}

export const replyToCommentLoading = (payload: string): ReplyToCommentLoadingType => {
    return {
        type: CoursesActionType.REPLY_TO_COMMENT_LOADING,
        payload
    }
}

export const addReplyToCommentLoading = (payload: string): AddReplyToCommentLoadingType => {
    return {
        type: CoursesActionType.ADD_REPLY_TO_COMMENT_LOADING,
        payload
    }
}


