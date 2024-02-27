import './App.css';
import NavHeader from './components/header';
import ShipmentDetails from './components/shipment_details';
import StepProgressBar from './components/progress_bar';
function App() {
  var status="DELIVERED_TO_SENDER"
  var color='#F9BA02';
  switch (status) {
    case "DELIVERED":
        status="Delivered";
        color="#36B600";
        break;
    case "CANCELLED":
        color="red";
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
        <ShipmentDetails color={color} id='15248' status={status} lastUpdate="25/2/2022" deliveryDate="2 jan 2002" retailer="Souq.com"/>
        <StepProgressBar color={color} percent={34}/>
      </body>
    </div>
  );
}

export default App;
