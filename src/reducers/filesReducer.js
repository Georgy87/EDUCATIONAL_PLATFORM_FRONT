const initialState = {
    files: [],
}
const filesReducer = (state = initialState, action) => {
    switch (action.type) {
        case  "SET-FILES":
            return {
                ...state,
                files: action.payload
            }
        case  "ADD-FILES":
            return {
                ...state,
                files: [...state.files, action.payload],
            }
        default :
            return state
    }
}

export const setFiles = (files) => {
    return {
        type: "SET-FILES",
        payload: files
    }
}

export const addFiles = (files) => {
    return {
        type: "ADD-FILES",
        payload: files
    }
}

export default filesReducer;