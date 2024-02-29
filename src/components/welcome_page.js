import {React,useState, useEffect} from 'react';
import {Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch } from 'react-redux';
import * as actionType from '../app/actionType';
import Spinner from './spinner';
import { useNavigate } from "react-router-dom";
import './id_search_menu.css';
import './welcome_page.css';
import '../App.css';
import {fetchThunkShipment} from '../app/shipment_slice';

function WelcomePage () {
  const navigate = useNavigate();
  const [searchID, setSearchID] = useState('');
  const { data, status, error } = useSelector((state) => state.shipment);
  let content
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
      if (isDataLoaded) {
      
        console.log('Data is loaded:', data);
        if (status === actionType.FETCH_DATA_LOADING) {
        console.log("loading");
        content = <Spinner text="Loading..." />
      } else if (status === actionType.FETCH_DATA_SUCCESS) {

        console.log("success");

        navigate("/tracking", {data:data});
      } else if (status === actionType.FETCH_DATA_ERROR) {
        content = <div>{error}</div>
      }
    }
  }, [data, isDataLoaded]);

  const handleChange = (event) => {
    setSearchID(event.target.value);
  }


  const handleSubmit =async (event) => {
    event.preventDefault();
    // console.log(`Searching for ${searchID}...`);
    dispatch(fetchThunkShipment(searchID))
      .then(() => setIsDataLoaded(true)) 
      .catch((error) => console.error('Error fetching data:', error));
    
    // console.log(status)
  
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
            {content}
          </Col>
        </form> 
      </Col>
    </body>
  );
};

export default WelcomePage;