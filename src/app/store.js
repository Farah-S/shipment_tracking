import { configureStore } from '@reduxjs/toolkit';
import shipmentReducer  from './shipment_slice';
// import filtersReducer from './features/filters/filtersSlice'
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
// import { client } from '../../api/client'

const store = configureStore({
  reducer: {
    shipment: shipmentReducer
  },
})




// store.dispatch(DataFetcher)

export default store