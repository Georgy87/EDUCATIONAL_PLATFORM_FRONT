export enum ContentCoursesActionsType {
    SET_COURSE_PROFILE = "SET-COURSE-PROFILE",
    SET_COURSE_PROFILE_VIDEO = "SET-COURSE-PROFILE-VIDEO",
}
export interface LinksToResourcesType {
    linkName: string;
    linksToResources: string;
    _id: string;
};
export type ModuleContentType = {
    fileVideo: string;
    lesson: string;
    lessonTime: string;
    linksToResources: LinksToResourcesType[];
    _id: string;
};
export type CourseContentType = {
    module: string;
    moduleContent: ModuleContentType[];
    moduleHours: number;
    moduleMinutes: number;
    moduleSeconds: number;
    _id: string;
};
export type CourseProfileStateType = {
    author: number;
    content: CourseContentType[];
    fullDescription: string;
    photo: string;
    price: string;
    profession: string;
    smallDescription: string;
    user: string;
    __v: string;
    _id: number;
};

export type setCourseProfileActionInterface = {
    type: ContentCoursesActionsType.SET_COURSE_PROFILE;
    payload: CourseProfileStateType;
};
export type setCourseProfileVideoActionInterface = {
    type: ContentCoursesActionsType.SET_COURSE_PROFILE_VIDEO;
    payload: string;
};