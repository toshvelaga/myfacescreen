import React from 'react';
import './GreyBtn.css'

const GreyBtn = (props) => {
    return (<>
        <button className="GreyBtn">{props.text}</button>
    </>);
}
 
export default GreyBtn;