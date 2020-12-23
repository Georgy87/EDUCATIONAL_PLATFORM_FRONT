export enum CourseProfileActionsType {
    SET_COURSE_PROFILE = "SET-COURSE-PROFILE",
    SET_COURSE_PROFILE_VIDEO = "SET-COURSE-PROFILE-VIDEO",
}
type LinksToResourcesType = {
    linkName: string;
    linksToResources: string;
    _id: string;
};
type ModuleContentType = {
    fileVideo: string;
    lesson: string;
    lessonTime: string;
    linksToResources: LinksToResourcesType[];
    _id: string;
};
type CourseContentType = {
    module: string;
    moduleContent: ModuleContentType[];
    moduleHours: number;
    moduleMinutes: number;
    moduleSeconds: number;
    _id: string;
};
export type CourseProfileStateType = {
    author: string;
    content: CourseContentType[];
    fullDescription: string;
    photo: string;
    price: string;
    profession: string;
    smallDescription: string;
    user: string;
    __v: number;
    _id: string;
};

export type setCourseProfileActionInterface = {
    type: CourseProfileActionsType.SET_COURSE_PROFILE;
    payload: CourseProfileStateType;
};
export type setCourseProfileVideoActionInterface = {
    type: CourseProfileActionsType.SET_COURSE_PROFILE_VIDEO;
    payload: string;
};
