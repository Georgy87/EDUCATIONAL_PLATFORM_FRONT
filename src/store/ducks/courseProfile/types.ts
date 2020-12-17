export enum ContentCoursesActionsType {
    SET_COURSE_PROFILE = "SET-COURSE-PROFILE",
    SET_COURSE_PROFILE_VIDEO = "SET-COURSE-PROFILE-VIDEO",
}
export type LinksToResourcesType = {
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
export type CourseProfileType = {
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
    type: ContentCoursesActionsType.SET_COURSE_PROFILE;
    payload: CourseProfileType;
};
export type setCourseProfileVideoActionInterface = {
    type: ContentCoursesActionsType.SET_COURSE_PROFILE_VIDEO;
    payload: string;
};