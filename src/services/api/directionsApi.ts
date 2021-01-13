import axios from "axios";
import { CourseDirectionsType, FilterByDirectionType } from "../../store/ducks/directions/reducer";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const directionsApi = {
    async uploadCourseDirections(formData: FormData) {
        return instance.post<CourseDirectionsType>('direction/upload', formData)
            .then(response => response.data);
    },
    async getCourseDirections() {
        return instance.get<CourseDirectionsType[]>('direction')
            .then(response => response.data);
    },
    async filterByDirection(search: string) {
        return instance.get<FilterByDirectionType[]>(`direction/search?search=${search}`)
            .then(response => response.data);
    },
    async deleteDirection(directionId: string, direction: string) {
        return instance.delete(`direction?id=${directionId}&direction=${direction}`);
    }
}