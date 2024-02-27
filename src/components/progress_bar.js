import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import {Col, Row} from 'react-bootstrap';
import './progress_bar.css';
import ProgressStep from './progress_bar_step';
import {PERCENTAGES} from '../utils/constants';

function StepProgressBar({color, percent}) {

    return (
        
        <div className="Progress-bar">
           <Row>
                <ProgressBar stepPositions={PERCENTAGES} percent={percent} height={8} filledBackground={color}>
                    <Step>
                    {({ accomplished, index }) => (
                        <ProgressStep color={color} index={index} percent={percent}/>
                        )}
                    </Step>
                    <Step>
                    {({ accomplished, index }) => (
                        <ProgressStep color={color} index={index} percent={percent}/>
                        )}
                    </Step>
                    <Step>
                    {({ accomplished, index }) => (
                        <ProgressStep color={color} index={index} percent={percent}/>
                        )}
                    </Step>
                    <Step>
                    {({ accomplished, index }) => (
                        <ProgressStep color={color} index={index} percent={percent}/>
                        )}
                    </Step>
                </ProgressBar>
            </Row> 
        </div>
    );
}
export default StepProgressBar;