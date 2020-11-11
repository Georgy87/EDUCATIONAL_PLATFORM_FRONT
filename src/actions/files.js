import axios from 'axios';
import {addFiles, setFiles} from "../reducers/filesReducer";

export const uploadFiles = (file, profession, shortDescription, courseDescription) => {

    return async (dispatch) => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('profession', profession);
            formData.append('shortDescription', shortDescription);
            // formData.append('courseDescription', courseDescription);

            const response = await axios.post(
                "http://localhost:5000/api/file/upload", formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            dispatch(addFiles(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const getFiles = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/file",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            dispatch(setFiles(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

