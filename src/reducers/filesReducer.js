const initialState = {
    files: [],
    filesDirections: [],
    filterByDirection: [],
    isFilter: false
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
        case  "SET-FILTER-BY-DIRECTIONS":
            return {
                ...state,
                filterByDirection: action.payload,
                isFilter: true
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

export const setFilterByDirections = (files) => {
    return {
        type: "SET-FILTER-BY-DIRECTIONS",
        payload: files
    }
}

export default filesReducer;