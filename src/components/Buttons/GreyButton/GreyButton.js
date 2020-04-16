import React from 'react';
import './GreyButton.css'

const GreyBtn = (props) => {
    return (<>
        <button className="GreyButton">{props.text}</button>
    </>);
}
 
export default GreyBtn;