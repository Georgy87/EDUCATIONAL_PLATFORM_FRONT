import axios from "axios";
import { setCourses, addCourses, setCourseProfile } from "../reducers/coursesReducer";
import { deleteCourseAction } from "../reducers/coursesReducer";
import { deleteFilterByDirections } from "../reducers/directionsReducer";

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

export const getProfileCourse = (courseId) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/course/profile?id=${courseId}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            console.log(response.data)
            dispatch(setCourseProfile(response.data));
        } catch (error) {
            console.log(error);
        }
    };
};
