import React from 'react';
import '../App.css';
import ShipmentDetailsBar from './shipment_details_bar';
import StepProgressBar from './progress_bar';
import ProgressBarTitles from './progress_bar_titles';
import ShipmentDetailsTable from './shipment_details_table';
import DeliveryAddressCol from './delivery_address_col';
import {Col, Row} from 'react-bootstrap';
import * as constants from '../utils/constants';

function ShipmentTrackingPage ({id,state, lastUpdate, retailer, deliveryDate, color}) {

    // var style={color:color};
    var state=constants.STATES[1];
    var color=constants.YELLOW_COLOR;
    const percent = constants.PERCENTAGES[2];
    return (
        <body className='App-body'>
            <Row>
                <Col className='Grey-border'>
                    <ShipmentDetailsBar color={color} id='15248' state={state} lastUpdate="25/2/2022" deliveryDate="2 jan 2002" retailer="Souq.com"/>
                    <Row className='Progress-row'>
                    <StepProgressBar color={color} percent={percent}/>
                    <ProgressBarTitles percent={percent}/>
                    </Row>
                </Col>
            </Row>
            <Row className='Small-titles'>
                <Col style={{width:"66%", fontSize:" calc(4px + 2vmin)"}} className='Black-font'>
                Shipment Details
                </Col>
                <Col style={{width:"34%", fontSize:" calc(4px + 2vmin)"}} className='Black-font'>
                Delivery Address
                </Col>
            </Row>
            <Row style={{display:"flex", flexDirection:"row"}}>
                <Col style={{width:"66%"}}>
                <ShipmentDetailsTable/>
                </Col>
                <Col style={{width:"34%", wordWrap:"break-word"}}>
                <DeliveryAddressCol/>
                </Col>
            </Row>
        </body>  
    );
};

export default ShipmentTrackingPage;