import { ContentCoursesActionsType, CourseProfileType, setCourseProfileActionInterface, setCourseProfileVideoActionInterface } from "./types";


export const setCourseProfile = (
    course: CourseProfileType
): setCourseProfileActionInterface => {
    return {
        type: ContentCoursesActionsType.SET_COURSE_PROFILE,
        payload: course
    };
};
export const setCourseProfileVideo = (
    video: string
): setCourseProfileVideoActionInterface => {
    console.log(video);
    return {
        type: ContentCoursesActionsType.SET_COURSE_PROFILE_VIDEO,
        payload: video,
    };
};

export type courseProfileActions =
    | setCourseProfileActionInterface
    | setCourseProfileVideoActionInterface;
