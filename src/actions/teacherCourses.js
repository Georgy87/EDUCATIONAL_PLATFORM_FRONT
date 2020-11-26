import axios from "axios";
import {
    getCourseContent
} from "../reducers/teacherCoursesReducer";

export const uploadNewCourse = (
    photoCourse = '',
    profession,
    author,
    price,
    shotDescription,
    fullDescription,
    module = '',
    fileVideo = '',
    lesson = '',
) => {

    return async (dispatch) => {
        try {

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

            const response = await axios.post(
                "http://localhost:5000/api/teacher/course",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );

        } catch (e) {
            console.log(e);
        }
    };
};

export const uploadCourseContent = (module = '', file = '', lesson = '', ) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            formData.append("module", module);
            formData.append("file", file);
            formData.append("lesson", lesson);

            const response = await axios.post(
                "http://localhost:5000/api/teacher/content",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            // dispatch(addCourses(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const getTeacherCourses = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/teacher",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );

            dispatch(getCourseContent(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};
