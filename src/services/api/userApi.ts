import axios from "axios";
import { CoursesDataType, PurchasedCoursesType } from "../../store/ducks/user/types";
import {
    CoursesForCartShop,
    GetShoppingCartType,
} from "../../store/ducks/user/types";

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
    getUser() {
        return instance.get<UserTokenApiType>("auth/auth").then((response) => {
            return response.data;
        });
    },
    setShoppingCartIds(id: string) {
        return instance.post(`auth/shopping-cart?shoppingCartId=${id}`);
    },
    getShoppingCart() {
        return instance
            .get<CoursesDataType>("course/shopping-cart")
            .then((response) => {
                return response.data;
            });
    },
    deleteShoppingCart(id: string) {
        return instance
            .delete(`course/delete-shopping-cart?id=${id}`)
            .then((response) => {
                return response.data;
            });
    },
    setPurchasedCourses(ids: string[], totalPrice: number) {
        console.log(ids, totalPrice);
        return instance
            .post(
                "auth/purchased-courses",
                { ids, totalPrice },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((response) => {
                return response.data;
            });
    },
    getPurchasedCourses() {
        return instance
            .get<PurchasedCoursesType[]>(
                "course/purchased-courses",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((response) => {
                return response.data;
            });
    },
};
