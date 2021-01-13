import axios from "axios";
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
    registrationUser(name: string, surname: string, email: string, password: string, teacher: boolean | false) {
        return instance.post('auth/registration', { name, surname, email, password, teacher });
    },
    loginUser(email: string, password: string) {
        return instance.post<UserTokenApiType>('auth/login', { email, password })
            .then(response => response.data);
    },
    getUser() {
        return instance.get<UserTokenApiType>("auth/auth")
            .then(response => response.data);
    },
    uploadUserAvatar(formData: FormData) {
        return instance.post<UserTokenApiType>('course/avatar', formData);
    },
    changeInfoUser(name: string, surname: string, professionalСompetence: string) {
        return instance.put('auth/change-info', { name, surname, professionalСompetence });
    },
    setShoppingCartIds(id: string) {
        return instance.post(`auth/shopping-cart?shoppingCartId=${id}`);
    },
    getShoppingCart() {
        return instance.get<CoursesDataType>("course/shopping-cart")
            .then(response => response.data);
    },
    deleteShoppingCart(id: string) {
        return instance.delete(`course/delete-shopping-cart?id=${id}`)
            .then(response => response.data);
    },
    setPurchasedCourses(ids: string[], totalPrice: number) {
        return instance.post('auth/purchased-courses', { ids, totalPrice })
            .then(response => response.data);
    },
    getPurchasedCourses() {
        return instance.get<PurchasedCoursesType[]>('course/purchased-courses')
            .then(response => response.data);
    },
};
