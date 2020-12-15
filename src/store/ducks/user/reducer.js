import produce from "immer";
const initialState = {
    user: {},
    isAuth: false,
};
const userReducer = produce((draftState = initialState, action) => {
    switch (action.type) {
        case "SET-USER":
            draftState.user = action.payload;
            draftState.isAuth = true;
            break;
        case "LOGOUT":
            localStorage.removeItem("token");
            draftState.user = {};
            draftState.isAuth = false;
            break;
        default:
            break;
    }
}, initialState);

export default userReducer;
