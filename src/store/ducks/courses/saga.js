import { CoursesApi } from "../../../services/api/coursesApi";
import { deleteFilterByDirections } from "../directions/actions";
import { deleteCourseAction, setCourseProfile, setCourses, setLoaded, setLoading } from "./actions";

export const uploadNewCourse = (
    photoCourse = "",
    profession,
    author,
    price,
    shotDescription,
    fullDescription,
    module = "",
    fileVideo = "",
    lesson = ""
) => {
    const formData = new FormData();
    formData.append("file", fileVideo);
    formData.append("file", photoCourse);
    formData.append("profession", profession);
    formData.append("author", author);
    formData.append("price", price);
    formData.append("smallDescription", shotDescription);
    formData.append("fullDescription", fullDescription);

    formData.append("lesson", lesson);
    formData.append("module", module);
    return async (dispatch) => {
        try {
            CoursesApi.uploadCourse(
                formData
            );
        } catch (e) {
            console.log(e);
        }
    };
};

export const getCourses = () => {
    return async (dispatch) => {
        dispatch(setLoading());
        try {
            CoursesApi.getCourses().then(data => {
                dispatch(setCourses(data));
                dispatch(setLoaded());
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const deleteCourse = (courseId, photo) => {
    return async (dispatch) => {
        try {
            CoursesApi.deleteCourse(courseId, photo).then(data => {
                dispatch(deleteCourseAction(courseId));
                dispatch(deleteFilterByDirections(courseId));
            });
        } catch (e) {
            console.log(e);
        }
    };
};

