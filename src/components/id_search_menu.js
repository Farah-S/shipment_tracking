import {React,useState} from 'react';
import {Col, Row } from 'react-bootstrap';
import { TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import './id_search_menu.css';

function IDSearchMenu () {
const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle search logic here
    console.log(`Searching for ${searchTerm}...`);
  }

  return (
    <div className="menu">   
      <form onSubmit={handleSubmit}>
          <Col style={{display:"flex", flexDirection:"column", margin:"4vh", marginTop:"2vh"}}>
            <p className='Search-title'>Track your shipment</p>
            <Row className='Search-bar-row'>
              <input placeholder='Tracking ID' maxLength={25} onChange={handleChange} value={searchTerm} id="id" className="Search-bar"/>
              <button type="submit" className='Search-bar-button'><FontAwesomeIcon className='Search-icon' icon={faMagnifyingGlass} /></button>
            </Row>
          </Col>
        </form>
    </div>
  );
};

export default IDSearchMenu;