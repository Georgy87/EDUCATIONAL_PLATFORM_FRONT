export const setCourses = (courses) => {
    return {
        type: "SET-COURSES",
        payload: courses
    }
}

export const addCourses = (course) => {
    return {
        type: "ADD-COURSES",
        payload: course
    }
}

export const deleteCourseAction = (courseId) => {

    return {
        type: "DELETE-COURSE",
        payload: courseId
    }
}

// export const setCourseProfile = (course) => {
//     return {
//         type: "SET-COURSE-PROFILE",
//         payload: course
//     }
// }