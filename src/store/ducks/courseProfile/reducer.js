const initialState = {
    courseProfile: null,
}

const courseProfile = (state = initialState, action) => {
    switch (action.type) {
        case "SET-COURSE-PROFILE":
            return {
                ...state,
                courseProfile: action.payload
            }
        default :
            return state
    }
}

export default courseProfile;