import {PERCENTAGES, GREY_COLOR} from '../utils/constants';
import {Col, Row} from 'react-bootstrap';
import React from 'react';
import '../App.css';

function ProgressBarTitles ({percent, state, error, color}) {

    var errorStyles=[{display:"none"},{display:"none"},{display:"none"},{display:"none"}];
    var styles=[{},{},{},{}];
    
    const index=PERCENTAGES.indexOf(percent);
    
    for (let i = 3; i > index; i--) {
        styles[i]['color']=GREY_COLOR;   
    }

    if(error!==""){
        errorStyles[index]={color:color}; 
    }

    return (
        <div style={{justifyContent:"center", display:"grid"}}>
            <Row className='Bar-titles'>
                <Col style={{width:"13vw", textAlign:"start"}}>
                    <Row className='Small-black-font' style={styles[0]}>Shipment Created</Row>
                    <Row className='Small-black-font' style={errorStyles[0]}>{error}</Row>
                </Col>
                <Col  style={{width:"22vw"}}>
                    <Row className='Small-black-font' style={styles[1]}>Recieved From Retailer</Row>
                    <Row className='Small-black-font' style={errorStyles[1]}>{error}</Row>
                </Col>
                <Col style={{width:"22vw"}}>
                    <Row className='Small-black-font' style={styles[2]}>Out For Delivery</Row>
                    <Row className='Small-black-font' style={errorStyles[2]}>{error}</Row>
                </Col>
                <Col style={{width:"13vw", textAlign:"end"}}>
                    <Row className='Small-black-font' style={styles[3]}>Delivered</Row>
                    <Row className='Small-black-font' style={errorStyles[3]}>{error}</Row>
                </Col>
            </Row>
        </div>
        
    );
};

export default ProgressBarTitles;