import { addCourseDirections, setCourseDirections, setFilterByDirections } from "../reducers/directionsReducer";
import axios from "axios";

export const uploadCourseDirections = (file, direction) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("direction", direction);

            const response = await axios.post(
                "http://localhost:5000/api/file/direction",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            dispatch(addCourseDirections(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const getCourseDirections = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/file/get",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            dispatch(setCourseDirections(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const filterByDirection = (search) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/file/search?search=${search}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            dispatch(setFilterByDirections(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};
