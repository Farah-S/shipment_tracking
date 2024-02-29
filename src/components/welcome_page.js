import {React,useState} from 'react';
import {Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import './id_search_menu.css';
import './welcome_page.css';
import '../App.css';

function WelcomePage () {
  const [searchID, setSearchID] = useState('');

  const handleChange = (event) => {
    setSearchID(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle search logic here
    console.log(`Searching for ${searchID}...`);
  }

  return (
    <body className='App-body'>
      <Col>
        <form onSubmit={handleSubmit}>
          <Col className='Welcome-col'>
            <p className='Welcome-title'>Welcome!</p>
            <p className='Welcome-search-title'>Track your shipment!</p>
            <Row className='Search-bar-row Welcome-Search-bar-row'>
              <input placeholder='Tracking ID' maxLength={25} onChange={handleChange} value={searchID} id="id" className="Search-bar Welcome-bar"/>
              <button type="submit" className='Welcome-Search-bar-button'><FontAwesomeIcon className='Welcome-Search-icon' icon={faMagnifyingGlass} /></button>
            </Row>
          </Col>
        </form> 
      </Col>
    </body>
  );
};

export default WelcomePage;