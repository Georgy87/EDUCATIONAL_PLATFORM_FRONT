export const setUser = (user) => {
    return {
        type: "SET-USER",
        payload: user
    }
}

export const logout = () => {
    return {
        type: "LOGOUT",
    }
}

