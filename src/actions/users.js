import axios from "axios";
import { setUser } from "../reducers/userReducer";

export const registration = async (name, email, password) => {
    try {
        const response = await axios.post(
            "http://localhost:5000/api/auth/registration",
            {
                name,
                email,
                password,
            }
        );
        return console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

export const login = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    email,
                    password,
                }
            );

            localStorage.setItem("token", response.data.token);
            return dispatch(setUser(response.data));
        } catch (error) {
            console.log(error);
        }
    };
};

export const auth = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/auth/auth",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            dispatch(setUser(response.data));

            localStorage.setItem("token", response.data.token);
        } catch (e) {
            console.log(e);
            // localStorage.removeItem("token");
        }
    };
};

export const uploadAvatar = (file) => {
    console.log(file);
    return async (dispatch) => {
        try {
            // const formData = new FormData();

            // formData.append("file", file);

            const result = await axios.post(
                // `http://localhost:5000/api/course/avatar/search=${file}}`,

                // {
                //     headers: {
                //         Authorization: `Bearer ${localStorage.getItem(
                //             "token"
                //         )}`,
                //     },
                // }
            );
            // dispatch(setUser(result.data));
            // console.log(result);
        } catch (error) {
            console.log("fggh");
        }
    };
};
