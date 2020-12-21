import { InferActionsTypes } from "../../store";
import { ContentCoursesActionsType, CourseProfileStateType, setCourseProfileActionInterface, setCourseProfileVideoActionInterface } from "./types";


export const actions = {
    setCourseProfile: (course: CourseProfileStateType): setCourseProfileActionInterface => ({
        type: ContentCoursesActionsType.SET_COURSE_PROFILE,
        payload: course
    } as const),
    setCourseProfileVideo: (video: string): setCourseProfileVideoActionInterface => ({
        type: ContentCoursesActionsType.SET_COURSE_PROFILE_VIDEO,
        payload: video,
    } as const)
};

export type CourseProfileActions = InferActionsTypes<typeof actions>;


