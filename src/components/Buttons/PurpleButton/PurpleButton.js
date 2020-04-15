import React from 'react';
import './PurpleButton.css'

const PurpleButton = (props) => {
    return (<>
        <button className="PurpleButton" style={{backgroundColor: props.color}}>{props.name}</button>
    </>);
}
 
export default PurpleButton;