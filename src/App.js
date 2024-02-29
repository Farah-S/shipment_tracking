import './App.css';
import {useState} from 'react';
import NavHeader from './components/header';

import * as constants from './utils/constants';
import ProgressBarTitles from './components/progress_bar_titles';
import ShipmentTrackingPage from './components/shipment_tracking_page';
import DeliveryAddressCol from './components/delivery_address_col';
// import { selectData } from './app/shipment_slice';
import {useSelector, useDispatch } from 'react-redux';
import store from './app/store';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from './components/welcome_page';
import {FETCH_DATA_IDLE} from './app/actionType';
// import { Provider } from "react-redux";
// import { applyMiddleware } from "redux";
// import {thunk} from "redux-thunk";
// import rootReducer from "./app/rootReducers";
// import { configureStore } from '@reduxjs/toolkit';
// import reducer from "./app/reducers.js";
// const store = configureStore( reducer, applyMiddleware(thunk));
function App() {

  // const dataSelector = selectData(store.getState());
  // const shipment = useSelector(selectData);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  // setData(dispatch(dataReducer()))

  var state=constants.STATES[1];
  var color=constants.YELLOW_COLOR;
  const percent = constants.PERCENTAGES[2];
  
  switch (state) {
    case "DELIVERED":
        state="Delivered";
        color=constants.GREEN_COLOR;
        break;
    case "CANCELLED":
        color=constants.RED_COLOR;
        state="Cancelled";
        break;
    default:
        state="Not Delivered";
        break;
  }
{/* <div className="App">
       <header className='App-header'>
          <NavHeader/>
        </header>
        <body className='App-body'>
          <Col>
            <WelcomePage/>
          </Col>
        </body>
      </div> */}

  state=FETCH_DATA_IDLE;
  // if(state===FETCH_DATA_IDLE){
    //state values: DELIVERED_TO_SENDER, DELIVERED, CANCELLED
    return (
      <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavHeader />}>
          <Route index element={<WelcomePage />} />
          <Route path="tracking/:state" element={<ShipmentTrackingPage color={color} />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    );
  // }
  // else{

  //   //state values: DELIVERED_TO_SENDER, DELIVERED, CANCELLED
  //   return (
    
  //      <ShipmentTrackingPage/>
    
  //   );
  // }
}

export default App;
