import axios from "axios";
import {
    setCourseContent
} from "../reducers/contentCoursesReducer";

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
            dispatch(setCourseContent(response.data.content));
        } catch (e) {
            console.log(e);
        }
    };
};

export const getCourseContent = () => {
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
            dispatch(setCourseContent(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const deleteLesson = (lessonId) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(
                `http://localhost:5000/api/teacher?id=${lessonId}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            dispatch(setCourseContent(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

// export const deleteLesson = (newTitle) => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.delete(
//                 `http://localhost:5000/api/teacher/lesson?newTitle=${newTitle}`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem(
//                             "token"
//                         )}`,
//                     },
//                 }
//             );
//             // dispatch(setCourseContent(response.data));
//         } catch (e) {
//             console.log(e);
//         }
//     };
// };
