const initialState = {
    user: {},
    isAuth: false
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case  "SET-USER":
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        default :
            return state
    }
}

export const setUser = (user) => {
    return {
        type: "SET-USER",
        payload: user
    }
}

export default userReducer;