import {
  FETCH_DATA_LOADING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "./actionType";
import DataFetcher from "./data_fetcher";

export const fetchData = (id) => {
  return async (dispatch) => {
    try {
      // Dispatch an action to indicate that data fetching has started
      dispatch({ type: FETCH_DATA_LOADING });

      // Fetch data from an API
      const result = await DataFetcher(id);

      // Dispatch an action with the fetched data
      if(result.error!==null){
        dispatch({ type: FETCH_DATA_ERROR, error: result.error });
      }
      else{
        dispatch({ type: FETCH_DATA_SUCCESS, payload: result.data });
      }
    } catch (error) {
      // Dispatch an action if an error occurs
      dispatch({ type: FETCH_DATA_ERROR, error: error.message });
    }
  };
};