import axios from "axios";
import {
    CourseDirectionsType,
    FilterByDirectionType,
} from "../../store/ducks/directions/reducer";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const directionsApi = {
    async uploadCourseDirections(formData: FormData) {
        return instance
            .post<CourseDirectionsType>("direction/upload", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => response.data);
    },
    async getCourseDirections() {
        return instance
            .get<CourseDirectionsType[]>("direction", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => response.data);
    },
    async filterByDirection(search: string) {
        return instance
            .get<FilterByDirectionType[]>(`direction/search?search=${search}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => response.data);
    },
    async deleteDirection(payload: { directionId: string; direction: string }) {
        return instance.delete(
            `direction?id=${payload.directionId}&direction=${payload.direction}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
    },
};
