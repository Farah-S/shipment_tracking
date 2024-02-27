import React from 'react';
import {Col, Row} from 'react-bootstrap';
function ShipmentDetails ({id,status, lastUpdate, retailer, deliveryDate}) {
    //status values: DELIVERED_TO_SENDER, DELIVERED, CANCELLED
    var font='#F9BA02';
    switch (status) {
        case "DELIVERED":
            status="Delivered";
            font="green";
            break;
        case "CANCELLED":
             font="red";
            status="Cancelled";
            break;
        default:
            status="Not Delivered";
            break;
    }
    
    var style={color:font};
    
    return (
        <Row className='Details'>
            <Col>
                <Row className='Grey-font' >Shipment Number {id}</Row>
                <Row className='Black-font' style={style}>{status}</Row>
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