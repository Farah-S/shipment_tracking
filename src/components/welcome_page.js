import {React,useState, useEffect} from 'react';
import {Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { selectData,selectStatus } from '../app/shipment_slice';
import {useSelector, useDispatch } from 'react-redux';
import * as actionType from '../app/actionType';
import Spinner from './spinner';
import store from '../app/store';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import './id_search_menu.css';
import './welcome_page.css';
import '../App.css';
import {fetchThunkShipment} from '../app/shipment_slice';
import {fetchShipment} from '../app/actions';
function WelcomePage () {
  const navigate = useNavigate();
  const [searchID, setSearchID] = useState('');
 const { data, status, error } = useSelector((state) => state.shipment);
  let content
   const [isDataLoaded, setIsDataLoaded] = useState(false);
  // const data = useSelector(selectData);
  const dispatch = useDispatch();
 useEffect(() => {
    if (isDataLoaded) {
      // Perform an action after the data is loaded
      console.log('Data is loaded:', data);
      if (status === actionType.FETCH_DATA_LOADING) {
    console.log("loading");
    content = <Spinner text="Loading..." />
  } else if (status === actionType.FETCH_DATA_SUCCESS) {
    // Sort posts in reverse chronological order by datetime string
    // const data = posts
    //   .slice()
    //   .sort((a, b) => b.date.localeCompare(a.date))

    // content = orderedPosts.map((post) => (
    //   <PostExcerpt key={post.id} post={post} />
    // ))
    console.log("success");

    // navigate("/tracking", {data:data});
  } else if (status === actionType.FETCH_DATA_ERROR) {
    content = <div>{error}</div>
  }
    }
  }, [data, isDataLoaded]);
// const shipmentStatus = useSelector(selectStatus);
// const error = useSelector((state) => state.shipment.error)
  
// useEffect(() => {
//   handleSubmit()
// }, [shipmentStatus, dispatch])

  const handleChange = (event) => {
    setSearchID(event.target.value);
  }


  const handleSubmit =async (event) => {
    event.preventDefault();
    // handle search logic here
    console.log(`Searching for ${searchID}...`);
    dispatch(fetchThunkShipment(searchID))
      .then(() => setIsDataLoaded(true)) // Set isDataLoaded to true after dispatching the action
      .catch((error) => console.error('Error fetching data:', error));
    // dispatch(fetchThunkShipment(searchID));
    console.log(status)
  
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