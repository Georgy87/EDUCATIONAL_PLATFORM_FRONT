type LinksToResourcesApiType = {
    linkName: string;
    linksToResources: string;
    _id: string;
};

type ModuleContentApiType = {
    fileVideo: string;
    lesson: string;
    lessonTime: string;
    linksToResources: LinksToResourcesApiType[];
    _id: string;
};

type CourseContentApiType = {
    module: string;
    moduleContent: ModuleContentApiType[];
    moduleHours: number;
    moduleMinutes: number;
    moduleSeconds: number;
    _id: string;
};

type CourseInfoApiType = {
    author: string;
    content: CourseContentApiType[];
    fullDescription: string;
    photo: string;
    price: string;
    profession: string;
    smallDescription: string;
    user: string;
    __v: number;
    _id: string;
};

type getCoursesDataType = {
    courses: CourseInfoApiType[];
};

export type typesApi = getCoursesDataType | CourseInfoApiType | ModuleContentApiType | LinksToResourcesApiType;