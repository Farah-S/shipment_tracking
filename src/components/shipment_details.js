import React from 'react';
import './shipment_details.css';
import {Col, Row} from 'react-bootstrap';

function ShipmentDetails ({id,state, lastUpdate, retailer, deliveryDate, color}) {

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
                    <Row className='Grey-font' >Retailer</Row>
                    <Row className='Black-font'>{retailer}</Row>
                </Col>
                <Col>
                    <Row className='Grey-font' >Delivery Time Within</Row>
                    <Row className='Black-font'>{deliveryDate}</Row>
                </Col>
            </Row>
        </div>  
    );
};

export default ShipmentDetails;