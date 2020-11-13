import axios from "axios";
import {
    setCourses,
    addCourses,
} from "../reducers/coursesReducer";
import {
    setCourseDirections,
    setFilterByDirections,
    addCourseDirections,
} from "../reducers/directionsReducer";

export const uploadCourses = (
    file,
    profession,
    author,
    price,
    smallDescription,
    fullDescription
) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("profession", profession);
            formData.append("author", author);
            formData.append("price", price);
            formData.append("smallDescription", smallDescription);
            formData.append("fullDescription", fullDescription);

            const response = await axios.post(
                "http://localhost:5000/api/file/upload",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            dispatch(addCourses(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const getCourses = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:5000/api/file", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            dispatch(setCourses(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

