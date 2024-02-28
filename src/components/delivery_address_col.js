import React from 'react';
import './delivery_address_col.css';
import {Col, Row} from 'react-bootstrap';

function DeliveryAddressCol({address}) {
    //status values: DELIVERED_TO_SENDER, DELIVERED, CANCELLED
    
    return (
        <Row className='Address-box'>
            <p style={{flexWrap:"wrap", width: "22vw"}}>
                {address}
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p> 
        </Row>  
    );
};

export default DeliveryAddressCol;