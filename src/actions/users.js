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
    console.log('hello')
    return async (dispatch) => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/auth/auth",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            dispatch(setUser(response.data));
            console.log()
            localStorage.setItem("token", response.data.token);
        } catch (e) {
            console.log(e);
            localStorage.removeItem("token");
        }
    };
};
