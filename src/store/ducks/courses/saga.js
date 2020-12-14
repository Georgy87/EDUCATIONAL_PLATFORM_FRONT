import axios from "axios";
import { deleteFilterByDirections } from "../directions/actions";
import { deleteCourseAction, setCourseProfile, setCourses } from "./actions";
// import { setCourses, addCourses, setCourseProfile } from "../reducers/coursesReducer";
// import { deleteCourseAction } from "../reducers/coursesReducer";
// import { deleteFilterByDirections } from "../reducers/directionsReducer";

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

export const getCourses = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/course",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            dispatch(setCourses(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const deleteCourse = (courseId, photo) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(
                `http://localhost:5000/api/course?id=${courseId}&name=${photo}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            dispatch(deleteCourseAction(courseId));
            dispatch(deleteFilterByDirections(courseId));
        } catch (e) {
            console.log(e);
        }
    };
};

// export const getProfileCourse = (courseId) => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.get(
//                 `http://localhost:5000/api/course/profile?id=${courseId}`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem(
//                             "token"
//                         )}`,
//                     },
//                 }
//             );
//             if (response.data) {
//                 const data = response.data;
//                 const module =  data.content[0];
//                 const lesson = module.moduleContent[0];
//                 const lessonVideo = lesson.fileVideo;
//                 console.log(lessonVideo);
//             }
//             dispatch(setCourseProfile(response.data));
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };
