import React from 'react';
import './SquareButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const SquareButton = (props) => {
    return (
        <button onClick={props.fx} className="SquareButton">
            <FontAwesomeIcon icon={faChevronDown} />
        </button>
    );
}
 
export default SquareButton;