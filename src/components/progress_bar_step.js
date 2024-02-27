import {React} from "react";
import "react-step-progress-bar/styles.css";
// import { ProgressBar, Step } from "react-step-progress-bar";
import './progress_bar.css';
// import clipboard_icon from '../assets/images/clipboard_icon.png';
// import received_icon from '../assets/images/received_icon.png';
// import truck_icon from '../assets/images/truck_icon.png';
// import package_icon from '../assets/images/package_icon.png';
import { Checkmark } from 'react-checkmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faTruckFast,faDolly,faClipboard,faBox } from '@fortawesome/free-solid-svg-icons';

function ProgressStep({color, index, percent}) {
   
    if(percent==100){
        return (
            <div>
                <Checkmark size='20px' color={color} />
            </div>
        ); 
    }
    else{
        var src=faClipboard;
       
        switch (index) {
            case 1:
                src=faDolly;
                break;
            case 2:
                src=faTruckFast;
                break;
            case 3:
                src=faBox;
                break;
            default:
                src=faClipboard;
                break;
        }
        
        var className="indexedStep";
        var style={}
        const current = parseInt(percent/33);
        
        if(current==index){
            className="currentStep";
            style={backgroundColor:color, borderColor:color};
        }
        else if(current>index){
            return (
                <div>
                    <Checkmark size='20px' color={color} />
                </div>
            ); 
        }
        return (
            <div className={className} style={style}>
                <FontAwesomeIcon icon={src} size="lg" style={{marginTop:"5px"}}/>
            </div>
        );
    
    }
}
export default ProgressStep;