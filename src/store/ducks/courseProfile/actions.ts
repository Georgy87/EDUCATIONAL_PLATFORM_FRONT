import { ContentCoursesActionsType, CourseProfileStateType, setCourseProfileActionInterface, setCourseProfileVideoActionInterface } from "./types";


export const setCourseProfile = (
    course: CourseProfileStateType
): setCourseProfileActionInterface => {

    return {
        type: ContentCoursesActionsType.SET_COURSE_PROFILE,
        payload: course
    };
};
export const setCourseProfileVideo = (
    video: string
): setCourseProfileVideoActionInterface => {
    return {
        type: ContentCoursesActionsType.SET_COURSE_PROFILE_VIDEO,
        payload: video,
    };
};

export type courseProfileActions =
    | setCourseProfileActionInterface
    | setCourseProfileVideoActionInterface;
