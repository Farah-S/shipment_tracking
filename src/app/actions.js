import DataFetcher from './data_fetcher';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData=() => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    try {
      const result = await DataFetcher();
    //   const data = await response.json();
      dispatch({ type: FETCH_DATA_SUCCESS, payload: result['data'] });
      if(result['error'] !== null){
        dispatch({ type: FETCH_DATA_FAILURE, payload: result['error'] });
      }
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
    }
  };
};
//   return {type: FETCH_DATA_REQUEST}


export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
