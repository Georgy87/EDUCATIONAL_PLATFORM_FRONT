import axios from "axios";
import { GetShoppingCartType } from "../../store/ducks/user/types";


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
        return instance.get<GetShoppingCartType[]>('course/shopping-cart').then(response => {
            return response.data;
        })
    }
}