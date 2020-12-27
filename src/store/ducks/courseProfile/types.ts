
// Course profile types:

export enum CourseProfileActionsType {
    SET_COURSE_PROFILE = "SET-COURSE-PROFILE",
    SET_COURSE_PROFILE_VIDEO = "SET-COURSE-PROFILE-VIDEO",
    SET_TEACHER = " SET-TEACHER",
    SET_LOADING = "SET-LOADING",
    SET_LOADED = "SET-LOADED",
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
    avatar: string;
    fullDescription: string;
    photo: string;
    price: string;
    profession: string;
    smallDescription: string;
    competence: string;
    user: string;
    __v: number;
    _id: string;
};

// Teacher profile types:

type TeacherCoursesForProfile = {
    _id: string;
    user: string;
    photo: string;
    profession: string;
    author: string;
    price: string;
    smallDescription: string;
};

export type TeacherType = {
    avatar: string;
    email: string;
    id: string;
    name: string;
    surname: string;
    competence: string;
    courses: TeacherCoursesForProfile[];
};

export type CourseProfileState = {
    courseProfile: CourseProfileStateType | null;
    courseProfileVideo: string;
    teacher: TeacherType | null;
    loadingState: string
};

export type GetShoppingCartType = {
    photo: string;
    author: string;
    price: string;
    smallDescription: string;
    profession: string;
}

// export type setCourseProfileActionInterface = {
//     type: CourseProfileActionsType.SET_COURSE_PROFILE;
//     payload: CourseProfileStateType;
// };
// export type setCourseProfileVideoActionInterface = {
//     type: CourseProfileActionsType.SET_COURSE_PROFILE_VIDEO;
//     payload: string;
// };
