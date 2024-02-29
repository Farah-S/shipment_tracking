import React from 'react';
import './delivery_address_col.css';
import {Button, Col, Row} from 'react-bootstrap';
import question_mark from '../assets/images/question_mark.jpg';

function DeliveryAddressCol({address}) {
    return (
        <div>
            <Row className='Address-box'>
                <p style={{flexWrap:"wrap", width: "22vw"}}>
                    {address}
                    Customer's address
                </p>
            </Row>
            <Row className='Problem-box'>
                <Col className='Problem-col'>
                    <Row style={{flexWrap:"wrap", paddingBottom:"1vh", alignContent:"center"}}>
                    Problem with your shipment?!
                    </Row>
                    <Button className='Problem-button'>Report Problem</Button>
                </Col>
                <Col className='Image-col'>
                    <img src={question_mark} alt='Question Mark' style={{width:"7vw"}}/>
                </Col>
            </Row>
        </div>
    );
};

export default DeliveryAddressCol;