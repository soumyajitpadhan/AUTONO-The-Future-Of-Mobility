export const FETCH_JOB_POSTINGS_REQUEST = "FETCH_JOB_POSTINGS_REQUEST";
export const FETCH_JOB_POSTINGS_SUCCESS = "FETCH_JOB_POSTINGS_SUCCESS";
export const FETCH_JOB_POSTINGS_FAILURE = "FETCH_JOB_POSTINGS_FAILURE";

export function fetchJobPostings() {
    return async (dispatch) => {

        dispatch({ type: FETCH_JOB_POSTINGS_REQUEST });

        try {
            let res = await fetch("https://autono-bd811-default-rtdb.firebaseio.com/job_postings.json")
            const data = await res.json();

            const jobPostings = [];
            for (const key in data) {
                jobPostings.push({
                    id: key,
                    ...data[key]
                })
            }

            // console.log(jobPostings);

            dispatch({ type: FETCH_JOB_POSTINGS_SUCCESS, payload: jobPostings });
        }
        catch (error) {
            dispatch({ type: FETCH_JOB_POSTINGS_FAILURE, error: error.message });
        }
    }
}