import './App.css';
import NavHeader from './components/header';
import ShipmentDetails from './components/shipment_details';
import StepProgressBar from './components/progress_bar';
import {Col, Row} from 'react-bootstrap';
import * as constants from './utils/constants';
import ProgressBarTitles from './components/progress_bar_titles';

function App() {
  var status=constants.STATES[1];
  var color=constants.YELLOW_COLOR;
  const percent = constants.PERCENTAGES[0];
  switch (status) {
    case "DELIVERED":
        status="Delivered";
        color=constants.GREEN_COLOR;
        break;
    case "CANCELLED":
        color=constants.RED_COLOR;
        status="Cancelled";
        break;
    default:
        status="Not Delivered";
        break;
  }
  //status values: DELIVERED_TO_SENDER, DELIVERED, CANCELLED
  return (
    <div className="App">
      <header className='App-header'>
        <NavHeader/>
      </header>
      <body className='App-body'>
        <Col className='Grey-border'>
          <ShipmentDetails color={color} id='15248' status={status} lastUpdate="25/2/2022" deliveryDate="2 jan 2002" retailer="Souq.com"/>
          <Row className='Progress-row'>
            <StepProgressBar color={color} percent={percent}/>
            <ProgressBarTitles percent={percent}/>
          </Row>
        </Col>
      </body>
    </div>
  );
}

export default App;
