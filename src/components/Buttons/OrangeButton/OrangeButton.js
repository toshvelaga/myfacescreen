import React from 'react';
import './OrangeButton.css'

const OrangeButton = (props) => {
    return (<>
        <button className="OrangeButton">{props.text}</button>
    </>);
}
 
export default OrangeButton;