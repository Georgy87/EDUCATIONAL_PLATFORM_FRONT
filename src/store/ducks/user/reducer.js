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
        case "LOGOUT" :
        localStorage.removeItem('token');
        return {
            ...state,
            user: {},
            isAuth: false
        }
        default :
            return state
    }
}

export default userReducer;