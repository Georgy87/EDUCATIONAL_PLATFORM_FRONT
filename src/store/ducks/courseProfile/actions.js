export const setCourseProfile = (course) => {
    return {
        type: "SET-COURSE-PROFILE",
        payload: course
    }
}
export const setCourseProfileVideo = (video) => {
    return {
        type: "SET-COURSE-PROFILE-VIDEO",
        payload: video
    }
}