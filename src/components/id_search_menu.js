import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fetchThunkShipment} from '../app/shipment_slice';
import {useSelector, useDispatch } from 'react-redux';
import {React,useState, useEffect} from 'react';
import * as actionType from '../app/actionType';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {Col, Row } from 'react-bootstrap';
import Spinner from './spinner';
import './id_search_menu.css';
import './welcome_page.css';
import '../App.css';

function IDSearchMenu () {
  
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [searchID, setSearchID] = useState('');
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  
  const { data, status, error } = useSelector((state) => state.shipment);
  
  let content=<div>{error}</div>

  const dispatch = useDispatch();
  useEffect(() => {
    if (isDataLoaded) {
      if (status === actionType.FETCH_DATA_LOADING) {  
        content = <Spinner text={t("loading")+"..."} />
      } 
      else if (status === actionType.FETCH_DATA_SUCCESS) {
        navigate("/tracking", {state:{data, searchID}});
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
            <p className='Search-title'>{t("t_your_s")}</p>
            <Row className='Search-bar-row'>
              <input placeholder={t("tracking") + " " + t("id")} maxLength={25} onChange={handleChange} value={searchID} id="id" className="Search-bar"/>
              <button type="submit" className='Search-bar-button'><FontAwesomeIcon className='Search-icon' icon={faMagnifyingGlass} /></button>
            </Row>
          </Col>
        </form>
    </div>
  );
};

export default IDSearchMenu;