import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

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
    moduleContent:  ModuleContentApiType[];
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

export const CoursesApi = {
    uploadCourse(formData: FormData) {
        return instance
            .post("teacher/course", formData)
            .then((response) => console.log(response.data));
    },
    getCourses() {
        return instance.get<getCoursesDataType>("course").then((response) => {
            console.log(response.data);
            return response.data;
        });
    },
    deleteCourse(courseId: string, photo: string) {
        return instance.delete(`course?id=${courseId}&name=${photo}`);
    },
};
