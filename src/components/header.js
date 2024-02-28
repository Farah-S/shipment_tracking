import {React,useState} from 'react';
import enLogo from '../assets/images/bosta-en-logo.png';
import {Navbar, Nav } from 'react-bootstrap';
import { TextField } from '@mui/material';
import IDSearchMenu from './id_search_menu';

function NavHeader () {
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>   
      <Navbar id="mainNav"  className='App-Nav'>
          <Navbar.Brand href="" style={{display:"flex"}}> 
            <img className='App-logo' src={enLogo} alt="logo" />
          </Navbar.Brand>
        
          <Nav className="App-Nav-items">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Pricing</Nav.Link>
            <Nav.Link href="">Contact Sales</Nav.Link>
          </Nav>
          <Nav className="App-Nav-items" style={{marginLeft:"10vw", width:"25vw"}}>
            <Nav.Link href="#" onClick={toggleMenu}>Track Shipment {isMenuOpen?">":""}</Nav.Link>
            {isMenuOpen && (
              <IDSearchMenu/>
            )}
            <Nav.Link href="">Login</Nav.Link>
            {/* //TODO: english/arabic */}
            <Nav.Link href="" style={{color:"red"}}>AR</Nav.Link>
          </Nav>
      </Navbar>
    </div>   
  );
};

export default NavHeader;