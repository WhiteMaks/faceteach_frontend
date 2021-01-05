const GET_SUBJECTS = "GET_SUBJECTS";
const SET_READY = "SET_READY";
const SET_ERROR = "SET_ERROR";

export const requestGetSubjects = (response) => {
    return {type: GET_SUBJECTS, data: response};
}

export const setIsReady = (status) => {
    return {type: SET_READY, data: status}
}

export const setError = (message) => {
    return {type: SET_ERROR, data: message}
}

let initialState = {
    data: [],
    isReady: false,
    error: null
}

const subjectsReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case GET_SUBJECTS: {
            stateCopy.data = action.data;
            break;
        }
        case SET_READY: {
            stateCopy.isReady = action.data;
            break;
        }
        case SET_ERROR: {
            stateCopy.error = action.data;
            break;
        }
    }
    return stateCopy;
}

export default subjectsReducer;