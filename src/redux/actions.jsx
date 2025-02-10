export const FETCH_JOB_POSTINGS_REQUEST = "FETCH_JOB_POSTINGS_REQUEST";
export const FETCH_JOB_POSTINGS_SUCCESS = "FETCH_JOB_POSTINGS_SUCCESS";
export const FETCH_JOB_POSTINGS_FAILURE = "FETCH_JOB_POSTINGS_FAILURE";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export function fetchJobPostings(page = 1, limit = 6) {
    return async (dispatch) => {

        dispatch({ type: FETCH_JOB_POSTINGS_REQUEST });

        try {
            let res = await fetch(import.meta.env.VITE_FIREBASE_JOB_POSTINGS_URL)
            const data = await res.json();

            const jobPostings = [];
            for (const key in data) {
                jobPostings.push({
                    id: key,
                    ...data[key]
                })
            }

            // Pagination
            const totalItems = jobPostings.length;
            const totalPages = Math.ceil(totalItems / limit);

            const startIndex = (page - 1) * limit;
            const endIndex = startIndex + limit;
            const slicedPostings = jobPostings.slice(startIndex, endIndex);

            dispatch({
                type: FETCH_JOB_POSTINGS_SUCCESS,
                payload: { jobPostings: slicedPostings, totalItems, totalPages, currentPage: page },
            });
        }
        catch (error) {
            dispatch({ type: FETCH_JOB_POSTINGS_FAILURE, error: error.message });
        }
    }
}

export function setCurrentPage(page) {
    return {
        type: SET_CURRENT_PAGE,
        payload: page,
    }
}