export const setLoading = () => {
    return {
        type: "SET-COURSES-LOADING",
    };
};

export const setCourses = (courses) => {
    return {
        type: "SET-COURSES",
        payload: courses,
    };
};

export const setLoaded = () => {
    return {
        type: "SET-COURSES-LOADED",
    };
};

export const addCourses = (course) => {
    return {
        type: "ADD-COURSES",
        payload: course,
    };
};

export const deleteCourseAction = (courseId) => {
    return {
        type: "DELETE-COURSE",
        payload: courseId,
    };
};
