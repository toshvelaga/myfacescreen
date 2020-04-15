import React from 'react';
import './SquareButton.css'

const SquareButton = (props) => {
    return (
        <button onClick={props.fx} className="SquareButton">V</button>
    );
}
 
export default SquareButton;