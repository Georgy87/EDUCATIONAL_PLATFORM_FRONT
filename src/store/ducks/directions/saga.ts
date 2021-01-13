import { addCourseDirections, deleteСourseDirections, setCourseDirections, setFilterByDirections } from "./actions";
import axios from "axios";
import { DispatchType } from "./types";
import { directionsApi} from "../../../services/api/directionsApi";

export const uploadCourseDirections = (file: File, direction: string) => {
    return async (dispatch: DispatchType) => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("direction", direction);
            const data = await directionsApi.uploadCourseDirections(formData);
            dispatch(addCourseDirections(data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const getCourseDirections = () => {
    return async (dispatch: DispatchType) => {
        try {
            const data = await directionsApi.getCourseDirections();
            dispatch(setCourseDirections(data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const filterByDirection = (search: string) => {
    return async (dispatch: DispatchType) => {
        try {
            const data = await directionsApi.filterByDirection(search);
            dispatch(setFilterByDirections(data));
        } catch (e) {
            console.log(e);
        }
    };
};

export const deleteDirection = (directionId: string, direction: string) => {
    return async (dispatch: DispatchType) => {
        try {
            dispatch(deleteСourseDirections(directionId));
            await directionsApi.deleteDirection(directionId, direction);
        } catch (e) {
            console.log(e);
        }
    };
};