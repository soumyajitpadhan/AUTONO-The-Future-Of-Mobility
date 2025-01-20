import { legacy_createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { jobPostingsReducer } from "./reducer";

export const store = legacy_createStore(
    jobPostingsReducer,
    applyMiddleware(thunk)
)