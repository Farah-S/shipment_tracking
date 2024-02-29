import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { FETCH_DATA_LOADING, FETCH_DATA_IDLE,FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './actionType';
import {fetchShipment} from './actions';


    
export const  fetchThunkShipment = createAsyncThunk('shipment/fetchThunkShipment', async (id, thunkAPI) => {
  
try {
      const response = await fetch('https://tracking.bosta.co/shipments/track/'+id); // Replace with your API endpoint
      if (!response.ok) {
         throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      console.log("thunk");
      
      // setData(data);
      // setLoading(false);
      return data;
    } catch (error) {
      console.log("thunk err");
       return thunkAPI.rejectWithValue(error.message); 
    }
})

var initialState={
    data: [],
    status: FETCH_DATA_IDLE,
    error: null,
  };

export const shipmentSlice = createSlice({
  name: 'shipment',
  initialState: initialState,
  reducers: {},
    //  shipmentDataReducer:(state = initialState, action) =>{
    //   // var foundIndex = 0;
    //   // var foundIndexCart = 0;
    //   // var { item, cart, total } = state;
    //       console.log("reducer");

    //   switch (action.type) {
    //     case FETCH_DATA_LOADING:
    //       return {
    //         ...state,
    //         status: FETCH_DATA_LOADING,
    //         error: null
    //       };
    //     case FETCH_DATA_SUCCESS:
    //       return {
    //         ...state,
    //         status: FETCH_DATA_SUCCESS,
    //         data: action.data
    //       };
    //     case FETCH_DATA_ERROR:
    //       return {
    //         ...state,
    //         status: FETCH_DATA_ERROR,
    //         error: action.payload.error,
    //         data: []
    //       };
    //   }
    // },
    extraReducers:(builder) =>{
      
      console.log("exreducer");
      builder.addCase(fetchThunkShipment.pending, (state, action) => {
        state.status = FETCH_DATA_LOADING;
      })
      .addCase(fetchThunkShipment.fulfilled, (state, action) => {
        console.log("exreducer");
        state.status = FETCH_DATA_SUCCESS;
        // Add any fetched posts to the array
        state.data = action.payload;
      })
      .addCase(fetchThunkShipment.rejected, (state, action) => {
        console.log("exreducer error");
        state.status = FETCH_DATA_ERROR;
        state.error = action.error.message;
      })
    },
  },
)

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
// export const  shipmentActions = shipmentSlice.actions;
export default shipmentSlice.reducer