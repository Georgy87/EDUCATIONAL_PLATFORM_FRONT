import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});


export const userApi = {
    getUser() {
        return instance.get("auth/auth").then(response => {
            console.log(response.data);
            return response.data;
        });
    }
}