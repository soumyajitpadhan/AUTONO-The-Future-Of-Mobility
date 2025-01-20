import { FETCH_JOB_POSTINGS_FAILURE, FETCH_JOB_POSTINGS_REQUEST, FETCH_JOB_POSTINGS_SUCCESS } from "./actions"

const initialState = {
    loading: false,
    jobPostings: [],
    error: '',
}

export const jobPostingsReducer = (state = initialState, { type, payload, error = '' }) => {
    switch (type) {
        case FETCH_JOB_POSTINGS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_JOB_POSTINGS_SUCCESS:
            return {
                loading: false,
                jobPostings: payload,
                error: '',
            }
        case FETCH_JOB_POSTINGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: error,
            }
        default:
            return state;
    }
}