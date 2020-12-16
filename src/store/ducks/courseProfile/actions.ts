export enum TweetsActionsType {
    SET_COURSE_PROFILE = "SET-COURSE-PROFILE",
    SET_COURSE_PROFILE_VIDEO = "SET-COURSE-PROFILE-VIDEO",
}

export interface courseProfileType {
    author: string
    content: []
    fullDescription: string
    photo: string
    price: string
    profession: string
    smallDescription: string
    user: string
    __v: number
    _id: string
}

export interface setCourseProfileActionInterface {
    type: TweetsActionsType.SET_COURSE_PROFILE,
    payload: courseProfileType
}

export interface setCourseProfileVideoActionInterface {
    type: TweetsActionsType.SET_COURSE_PROFILE_VIDEO,
    payload: string
}

export const setCourseProfile = (course: courseProfileType): setCourseProfileActionInterface  => {
    return {
        type: TweetsActionsType.SET_COURSE_PROFILE,
        payload: course
    }
}
export const setCourseProfileVideo = (video: string): setCourseProfileVideoActionInterface => {
    console.log(video)
    return {
        type: TweetsActionsType.SET_COURSE_PROFILE_VIDEO,
        payload: video
    }
}

export type courseProfileActions = setCourseProfileActionInterface | setCourseProfileVideoActionInterface;
