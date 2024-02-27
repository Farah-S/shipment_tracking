import React from 'react';
import {Col, Row} from 'react-bootstrap';
function ShipmentDetails ({id,status, lastUpdate, retailer, deliveryDate}) {
 return (
        <Row className='Details'>
            <Col>
                <Row className='Grey-font' >Shipment Number {id}</Row>
                <Row className='Black-font'>{status}</Row>
            </Col>
            <Col>
                <Row className='Grey-font' >Last Update</Row>
                <Row className='Black-font'>{lastUpdate}</Row>
            </Col>
            <Col>
                <Row className='Grey-font' >Retailer</Row>
                <Row className='Black-font'>{retailer}</Row>
            </Col>
            <Col>
                <Row className='Grey-font' >Delivery Time Within</Row>
                <Row className='Black-font'>{deliveryDate}</Row>
            </Col>
        </Row>
    
     
    );
};

export default ShipmentDetails;