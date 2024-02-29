import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fetchThunkShipment} from '../app/shipment_slice';
import {useSelector, useDispatch } from 'react-redux';
import {React,useState, useEffect} from 'react';
import * as actionType from '../app/actionType';
import { useNavigate } from "react-router-dom";
import {Col, Row } from 'react-bootstrap';
import Spinner from './spinner';
import './id_search_menu.css';
import './id_search_menu.css';
import './welcome_page.css';
import '../App.css';

function IDSearchMenu () {
 const navigate = useNavigate();
  const [searchID, setSearchID] = useState('');
  const { data, status, error } = useSelector((state) => state.shipment);
  let content
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isDataLoaded) {
      if (status === actionType.FETCH_DATA_LOADING) {  
        content = <Spinner text="Loading..." />
      } 
      else if (status === actionType.FETCH_DATA_SUCCESS) {
        navigate("/tracking", {state:{data}});
      } 
      else if (status === actionType.FETCH_DATA_ERROR) {
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
  }

  return (
    <div className="menu">   
      <form onSubmit={handleSubmit}>
          <Col style={{display:"flex", flexDirection:"column", margin:"4vh", marginTop:"2vh"}}>
            <p className='Search-title'>Track your shipment</p>
            <Row className='Search-bar-row'>
              <input placeholder='Tracking ID' maxLength={25} onChange={handleChange} value={searchID} id="id" className="Search-bar"/>
              <button type="submit" className='Search-bar-button'><FontAwesomeIcon className='Search-icon' icon={faMagnifyingGlass} /></button>
            </Row>
          </Col>
        </form>
    </div>
  );
};

export default IDSearchMenu;