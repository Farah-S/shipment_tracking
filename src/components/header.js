import enLogo from '../assets/images/bosta-en-logo.png';
import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {Navbar, Nav } from 'react-bootstrap';
import IDSearchMenu from './id_search_menu';
import {React,useState} from 'react';
import '../App.css';

function NavHeader () {
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const { i18n } = useTranslation();
  const activeLocale = i18n.resolvedLanguage; 

  const handleClick = (event) => {
    // setSearchID(event.target.value);
    if(activeLocale=='ar'){
      i18n.changeLanguage("en");
    }
    else{
      i18n.changeLanguage("ar");  
    }
  }

  return (
    <header className='App-header'>
      <div className='header'>   
        <Navbar id="mainNav"  className='App-Nav'>
          <Navbar.Brand href="" style={{display:"flex"}}> 
            <img className='App-logo' src={enLogo} alt="logo" />
          </Navbar.Brand>
        
          <Nav className="App-Nav-items">
            <Link to="/">Home</Link>
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
            <Nav.Link href="" style={{color:"red"}} onClick={handleClick}>{activeLocale=='ar'?'ENG':'AR'}</Nav.Link>
          </Nav>
        </Navbar>
      </div>  
      <Outlet /> 
    </header>
  );
};

export default NavHeader;