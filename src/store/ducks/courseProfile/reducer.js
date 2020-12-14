const initialState = {
    courseProfile: null,
    courseProfileVideo: ''
}

const courseProfile = (state = initialState, action) => {

    switch (action.type) {
        case "SET-COURSE-PROFILE":
            return {
                ...state,
                courseProfile: action.payload
            }
        case "SET-COURSE-PROFILE-VIDEO":
            return {
                ...state,
                courseProfileVideo: action.payload
            }
        default :
            return state
    }
}

export default courseProfile;