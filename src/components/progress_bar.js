import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './progress_bar.css';
import ProgressStep from './progress_bar_step';

function StepProgressBar({color, percent}) {
//    render() {
    //0 34 67 100
    
    return (
        <div style={{padding: "50px", display:"grid", flexDirection:"row"}}>
            <ProgressBar stepPositions={[0,34,67, 100]} percent={percent} height={8} filledBackground={color}>
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
        </div>
    );
//   }
}
export default StepProgressBar;