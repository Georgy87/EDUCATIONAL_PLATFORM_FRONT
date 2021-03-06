import { InferActionsTypes } from "../../store";
import { CourseProfileActionsType, CourseProfileStateType, TeacherType } from "./types";

export const actions = {
    fetchGetProfileCourse: (payload: string) => ({
        type: CourseProfileActionsType.FETCH_GET_PROFILE_COURSE,
        payload
    } as const),
    fetchGetTeacher: (payload: string | undefined) => ({
        type: CourseProfileActionsType.FETCH_GET_TEACHER,
        payload
    } as const),
    setCourseProfile: (course: CourseProfileStateType) => ({
        type: CourseProfileActionsType.SET_COURSE_PROFILE,
        payload: course
    } as const),
    setCourseProfileVideo: (video: string) => ({
        type: CourseProfileActionsType.SET_COURSE_PROFILE_VIDEO,
        payload: video,
    } as const),
    setTeacher: (teacher: TeacherType) => ({
        type: CourseProfileActionsType.SET_TEACHER,
        payload: teacher
    } as const),
    setUserLoading: () => ({
        type: CourseProfileActionsType.SET_LOADING,
    } as const),
    setUserLoaded: () => ({
        type: CourseProfileActionsType.SET_LOADED,
    } as const)
};

export type CourseProfileActions = InferActionsTypes<typeof actions>;


