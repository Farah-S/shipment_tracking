import './App.css';
import NavHeader from './components/header';
import ShipmentDetails from './components/shipment_details';

function App() {
  //status values: DELIVERED_TO_SENDER, DELIVERED, CANCELLED
  return (
    <div className="App">
      <header className='App-header'>
        <NavHeader/>
      </header>
      <body className='App-body'>
        <ShipmentDetails id='15248' status="CANCELLED" lastUpdate="25/2/2022" deliveryDate="2 jan 2002" retailer="Souq.com"/>
      </body>
    </div>
  );
}

export default App;
