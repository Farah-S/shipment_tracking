import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { FETCH_DATA_LOADING, FETCH_DATA_IDLE,FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './actionType';
import dataReducer from './reducers';


    
export const fetchShipment = createAsyncThunk('shipment', async (id) => {
  
// try {
      const response = await fetch('https://tracking.bosta.co/shipments/track/'+id); // Replace with your API endpoint
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok.');
    //   }
    //   const data = await response.json();
    //   // setData(data);
    //   // setLoading(false);
    // } catch (error) {
    //   setError(error.message);
    //   setLoading(false);
    // }
  return response.data
})

export const shipmentSlice = createSlice({
  name: 'shipment',
  initialState: {
    data: [],
    status: FETCH_DATA_IDLE,
    error: null,
  },
  reducers: {
    dataReducer: (state, action) => {
      switch (action.type) {
        case FETCH_DATA_LOADING:
          return {
            ...state,
            loading: true,
            error: null,
          };
        case FETCH_DATA_SUCCESS:
          return {
            ...state,
            loading: false,
            data: action.payload,
          };
        case FETCH_DATA_ERROR:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
        default:
          return state;
      }
    },
    extraReducers(builder) {
    builder
      .addCase(fetchShipment.pending, (state, action) => {
        state.status = FETCH_DATA_LOADING
      })
      .addCase(fetchShipment.fulfilled, (state, action) => {
        state.status = FETCH_DATA_SUCCESS
        // Add any fetched posts to the array
        state.data = action.payload;
      })
      .addCase(fetchShipment.rejected, (state, action) => {
        state.status = FETCH_DATA_ERROR
        state.error = action.error.message
      })
    },
  },
})

// export const { increment, decrement, incrementByAmount } = shipmentSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const fetchData = (id) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(dataReducer(id))
//   }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectData = (state) => state.shipment.data;
export const selectError = (state) => state.shipment.error;
export const selectStatus = (state) => state.shipment.status;

export default shipmentSlice.reducer