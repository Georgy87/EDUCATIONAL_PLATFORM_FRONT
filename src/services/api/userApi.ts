import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

type UserInfoApiType = {
    avatar: string;
    email: string;
    id: string;
    name: string;
    surname: string;
    teacher: string;
    isAuth: string;
    professionalСompetence: string;
};

type UserTokenApiType = {
    token: string;
    user: UserInfoApiType;
}

export const userApi = {
    getUser() {
        return instance.get<UserTokenApiType>("auth/auth").then(response => {
            return response.data;
        });
    }
}