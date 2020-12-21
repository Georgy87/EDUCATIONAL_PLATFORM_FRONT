import produce, { Draft } from "immer";

type ModuleContentType = {
    _id: string;
    fileVideo: string;
    lesson: string;
    lessonTime: string;
    linksToResources: Array<string>;
}

type ContentType = {
    _id: string;
    module: string;
    moduleHours: number;
    moduleMinutes: number;
    moduleSeconds: number;
    moduleContent: ModuleContentType[]
}

export type CoursesContentType = {
    _id: string;
    user: string;
    photo: string;
    profession: string;
    author: string;
    price: string;
    smallDescription: string;
    fullDescription: string;
    content: ContentType[];
    __v: number;
    videoName: string;
    lessonTime: string;
};

export type CoursesContentStateType = {
    courseContent: CoursesContentType | null;
    videoName: string;
    lessonTime: string | null;
    allTeacherCourses: CoursesContentType[];
};

const initialState: CoursesContentStateType = {
    courseContent: null,
    videoName: "",
    lessonTime: null,
    allTeacherCourses: [],
};

const contentCoursesReducer = produce(
    (draftState: Draft<CoursesContentStateType>, action: any) => {
        switch (action.type) {
            case "ADD-COURSE-CONTENT":
                draftState.courseContent = action.payload;
                break;
            case "SET-COURSE-CONTENT":
                draftState.courseContent = action.payload;
                break;
            case "SET-VIDEO-NAME":
                draftState.videoName = action.payload;
                break;
            case "SET-TIME-LESSON":
                draftState.lessonTime = { ...action.payload };
                break;
            case "SET-ALL-TEACHER-COURSES":
                draftState.allTeacherCourses = action.payload;
                break;
            default:
                break;
        }
    },
    initialState
);

export default contentCoursesReducer;
