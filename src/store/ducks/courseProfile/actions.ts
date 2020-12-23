import { InferActionsTypes } from "../../store";
import { CourseProfileActionsType, CourseProfileStateType } from "./types";

export const actions = {
    setCourseProfile: (course: CourseProfileStateType) => ({
        type: CourseProfileActionsType.SET_COURSE_PROFILE,
        payload: course
    } as const),
    setCourseProfileVideo: (video: string) => ({
        type: CourseProfileActionsType.SET_COURSE_PROFILE_VIDEO,
        payload: video,
    } as const),
    setTeacher: (teacher: any) => ({
        type: CourseProfileActionsType.SET_TEACHER,
        payload: teacher
    })
};

export type CourseProfileActions = InferActionsTypes<typeof actions>;


