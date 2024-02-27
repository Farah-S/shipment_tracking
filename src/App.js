import enLogo from './assets/images/bosta-en-logo.png';
import './App.css';
import { Row, Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  
  return (
    <div className="App">
      <header>
       
    <Navbar id="mainNav"  className='App-header'>
        <Navbar.Brand href="#home" style={{display:"flex"}}> 
          <img className='App-logo' src={enLogo} alt="logo" />
        </Navbar.Brand>
       
          <Nav className="App-Nav-items">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Pricing</Nav.Link>
            <Nav.Link href="">Contact Sales</Nav.Link>
          </Nav>
          <Nav className="App-Nav-items" style={{marginLeft:"10vw", width:"25vw"}}>
            <Nav.Link href="">Track Shipment</Nav.Link>
            <Nav.Link href="">Login</Nav.Link>
            {/* //TODO: english/arabic */}
            <Nav.Link href="">AR</Nav.Link>
          </Nav>
    </Navbar>
    </header>
      <body>
        <h1>bodyy</h1>
      </body>
    </div>
  );
}

export default App;
