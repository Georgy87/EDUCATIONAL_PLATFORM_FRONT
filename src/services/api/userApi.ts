import axios from "axios";
import { LoginProps } from "../../components/loginPage/LoginPage";

import { RegistrationFormProps } from "../../components/registrationPage/RegistrationPage";
import { CoursesDataType, PurchasedCoursesType } from "../../store/ducks/user/types";

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
    competence: string;
};

type UserTokenApiType = {
    token: string;
    user: UserInfoApiType;
};

export const userApi = {
    registrationUser(formData: RegistrationFormProps) {
        return instance.post("auth/registration", {
            name: formData.name,
            surname: formData.surname,
            email: formData.email,
            password: formData.password,
            teacher: formData.teacher,
        });
    },
    loginUser(payload: LoginProps) {
        return instance
            .post<UserTokenApiType>(
                "auth/login",
                {
                    email: payload.email,
                    password: payload.password,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((response) => response.data);
    },
    getUser() {
        return instance
            .get<UserTokenApiType>("auth/auth", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => response.data);
    },
    uploadUserAvatar(formData: FormData) {
        return instance.post<UserTokenApiType>("course/avatar", formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
    },
    changeInfoUser(payload: {
        name: string;
        surname: string;
        professionalСompetence: string;
    }) {
        return instance.put("auth/change-info", {
            name: payload.name,
            surname: payload.surname,
            professionalСompetence: payload.professionalСompetence,
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
    },
    setShoppingCartIds(id: string) {
        return instance.post(`auth/shopping-cart?shoppingCartId=${id}`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
    },
    getShoppingCart() {
        return instance
            .get<CoursesDataType>("course/shopping-cart", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => response.data);
    },
    deleteShoppingCart(id: string) {
        return instance
            .delete(`course/delete-shopping-cart?id=${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => response.data);
    },
    setPurchasedCourses(payload: { ids: string[]; totalPrice: number }) {
        return instance
            .post(
                "auth/purchased-courses",
                { ids: payload.ids, totalPrice: payload.totalPrice },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((response) => response.data);
    },
    getPurchasedCourses() {
        return instance
            .get<PurchasedCoursesType[]>("course/purchased-courses", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => response.data);
    },
};
