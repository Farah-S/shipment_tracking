import React from 'react';
import './shipment_details_bar.css';
import {Col, Row} from 'react-bootstrap';

function ShipmentDetailsBar ({id,state, lastUpdate, retailer, deliveryDate, color}) {

    var style={color:color};
    
    return (
        <div style={{display:'flex', justifyContent:"center"}}>
                <Row className='Details'>
                <Col>
                    <Row className='Grey-font' >Shipment Number {id}</Row>
                    <Row className='Black-font' style={style}>{state}</Row>
                </Col>
                <Col>
                    <Row className='Grey-font' >Last Update</Row>
                    <Row className='Black-font'>{lastUpdate}</Row>
                </Col>
                <Col>
                    <Row className='Grey-font' >Provider</Row>
                    <Row className='Black-font'>{retailer}</Row>
                </Col>
                <Col>
                    <Row className='Grey-font' >Estimated Delivery Date</Row>
                    <Row className='Black-font'>{deliveryDate}</Row>
                </Col>
            </Row>
        </div>  
    );
};

export default ShipmentDetailsBar;