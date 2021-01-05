import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import subjectsReducer from "./subjectsReducer";

let reducer = combineReducers({
    profile: profileReducer,
    subjects: subjectsReducer
})

let store = createStore(reducer);

export default store;