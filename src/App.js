import './App.css';
import NavHeader from './components/header';
import ShipmentTrackingPage from './components/shipment_tracking_page';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from './components/welcome_page';

function App() {
    return (
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavHeader />}>
            <Route index element={<WelcomePage />} />
            <Route path="tracking" element={<ShipmentTrackingPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    );
}

export default App;
