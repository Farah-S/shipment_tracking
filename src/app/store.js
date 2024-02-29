import { configureStore } from '@reduxjs/toolkit';
import shipmentDataReducer  from './shipment_slice';
// import filtersReducer from './features/filters/filtersSlice'
import { createSlice, nanoid, applyMiddleware  } from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk'; 
// import { client } from '../../api/client'

// const store = configureStore({
//   reducer: {
//     shipment: shipmentDataReducer
//   },
// })
const store = configureStore({
  reducer:{shipment: shipmentDataReducer},
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
// const store = configureStore(shipmentDataReducer, applyMiddleware(thunk));



// store.dispatch(DataFetcher)

export default store