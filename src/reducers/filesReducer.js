const initialState = {
    files: [],
    filesDirections: []
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

        case  "SET-FILES-DIRECTIONS":
            return {
                ...state,
                filesDirections: action.payload
            }
        case  "ADD-FILES-DIRECTIONS":
            return {
                ...state,
                filesDirections: [...state.filesDirections, action.payload],
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

export const setFilesDirections = (files) => {
    return {
        type: "SET-FILES-DIRECTIONS",
        payload: files
    }
}

export const addFilesDirections = (files) => {
    return {
        type: "ADD-FILES-DIRECTIONS",
        payload: files
    }
}

export default filesReducer;