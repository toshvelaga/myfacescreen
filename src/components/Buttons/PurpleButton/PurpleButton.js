import React from 'react';
import './PurpleButton.css'

const PurpleButton = (props) => {
    return (
        <button onClick={props.fx} className="PurpleButton">V</button>
    );
}
 
export default PurpleButton;