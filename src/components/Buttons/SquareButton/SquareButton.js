import React from 'react';
import './SquareButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const SquareButton = (props) => {
    return (
        <button disabled={props.disabled} onClick={props.fx} title={props.title} className="SquareButton">
            <FontAwesomeIcon icon={faChevronDown} />
        </button>
    );
}
 
export default SquareButton;