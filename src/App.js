import './App.css';
import {useState} from 'react';
import NavHeader from './components/header';
import ShipmentDetails from './components/shipment_details';
import StepProgressBar from './components/progress_bar';
import {Col, Row} from 'react-bootstrap';
import * as constants from './utils/constants';
import ProgressBarTitles from './components/progress_bar_titles';
import ShipmentDetailsTable from './components/shipment_details_table';
import DeliveryAddressCol from './components/delivery_address_col';
import { selectData } from './app/shipment_slice';
import {useSelector, useDispatch } from 'react-redux';
import store from './app/store';
// import { Provider } from "react-redux";
// import { applyMiddleware } from "redux";
// import {thunk} from "redux-thunk";
// import rootReducer from "./app/rootReducers";
// import { configureStore } from '@reduxjs/toolkit';
// import reducer from "./app/reducers.js";
// const store = configureStore( reducer, applyMiddleware(thunk));
function App() {

  // const dataSelector = selectData(store.getState());
  const shipment = useSelector(selectData);
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

  //state values: DELIVERED_TO_SENDER, DELIVERED, CANCELLED
  return (
    <div className="App">
      <header className='App-header'>
        <NavHeader/>
      </header>
      <body className='App-body'>
        <Row>
        <Col className='Grey-border'>
          <ShipmentDetails color={color} id='15248' state={state} lastUpdate="25/2/2022" deliveryDate="2 jan 2002" retailer="Souq.com"/>
          <Row className='Progress-row'>
            <StepProgressBar color={color} percent={percent}/>
            <ProgressBarTitles percent={percent}/>
          </Row>
        </Col>
        </Row>
        <Row className='Small-titles'>
          <Col style={{width:"66%", fontSize:" calc(4px + 2vmin)"}} className='Black-font'>
            Shipment Details
          </Col>
          <Col style={{width:"34%", fontSize:" calc(4px + 2vmin)"}} className='Black-font'>
            Delivery Address
          </Col>
        </Row>
        <Row style={{display:"flex", flexDirection:"row"}}>
          <Col style={{width:"66%"}}>
            <ShipmentDetailsTable/>
          </Col>
          <Col style={{width:"34%", wordWrap:"break-word"}}>
            <DeliveryAddressCol/>
          </Col>
        </Row>
      </body>
    </div>
  );
}

export default App;
