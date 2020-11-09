const initialState = {
    user: {},
    isAuth: false
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case  "":
            return {

            }
        default :
            return state
    }
}

export const setUser = () => {
    
}

export default userReducer;