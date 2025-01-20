import { FETCH_JOB_POSTINGS_FAILURE, FETCH_JOB_POSTINGS_REQUEST, FETCH_JOB_POSTINGS_SUCCESS, SET_CURRENT_PAGE } from "./actions"

const initialState = {
    loading: false,
    jobPostings: [],
    error: '',
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 6,
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
                ...state,
                loading: false,
                jobPostings: payload.jobPostings,
                totalItems: payload.totalItems,
                totalPages: payload.totalPages,
                currentPage: payload.currentPage,
                error: '',
            }
        case FETCH_JOB_POSTINGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: error,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload,
            }
        default:
            return state;
    }
}