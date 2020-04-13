import React from 'react';
import './OrangeBtn.css'

const OrangeBtn = (props) => {
    return (<>
        <button className="OrangeBtn">{props.text}</button>
    </>);
}
 
export default OrangeBtn;