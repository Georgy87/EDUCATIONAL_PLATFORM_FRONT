import produce from "immer";
const initialState = {
    courseProfile: null,
    courseProfileVideo: "",
};

const courseProfile = produce((draftState = initialState, action) => {
    switch (action.type) {
        case "SET-COURSE-PROFILE":
            draftState.courseProfile = action.payload;
            break;
        case "SET-COURSE-PROFILE-VIDEO":
            draftState.courseProfileVideo = action.payload;
            break;
        default:
            break;
    }
}, initialState);

export default courseProfile;
