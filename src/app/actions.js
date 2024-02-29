import {
  FETCH_DATA_LOADING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "./actionType";
import DataFetcher from "./data_fetcher";


export function fetchDataRequest() {
  return {
    type: FETCH_DATA_LOADING
  };
}

export function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data
  };
}

export function fetchDataError(error) {
  return {
    type: FETCH_DATA_ERROR,
    payload: { error }
  };
}

export const fetchShipment = (id) => async (dispatch, getState) =>  {

    dispatch(fetchDataRequest());
    // try {
      fetch('https://tracking.bosta.co/shipments/track/'+id).then((response)=>{
        
        if (!response.ok) {
          throw new Error('Network error');
        }  
        return response.json()}).then(data => {
          console.log("action success")
          // Dispatch a success action with the fetched data
        dispatch(fetchDataSuccess(data));
      }).catch(error => {
        // console.log("error here");
        // Dispatch a failure action if an error occurs
        fetchDataError(error.message);
      });; // Replace with your API endpoint
      // if (!response.ok) {
      //   dispatch(fetchDataError(response.status));
      // }
      // const data =  response.json();
      // dispatch(fetchDataSuccess(data));
      // setData(data);
      // setLoading(false);
    // } catch (error) {
    //   setError(error.message);
    //   setLoading(false);
    // }
    // axios
    //   .get(
    //     "https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json"
    //   )
    //   .then(response => {
    //     dispatch(fetchDataSuccess(response.data));
    //   })
    //   .catch(error => {
    //     dispatch(fetchDataError(error));
    //   });
  };
