import axios from "axios";
import { CoursesDataType } from "../../store/ducks/user/reducer";
import { CoursesForCartShop, GetShoppingCartType } from "../../store/ducks/user/types";

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
}

export const userApi = {
    getUser() {
        return instance.get<UserTokenApiType>("auth/auth").then(response => {
            return response.data;
        });
    },
    setShoppingCartIds(id: string) {
        return instance.post(`auth/shopping-cart?shoppingCartId=${id}`);
    },
    getShoppingCart() {
        return instance.get<CoursesDataType>('course/shopping-cart').then(response => {
            console.log(response.data);
            return response.data;
        })
    }
}