import React from 'react';
import usaflag from '../../assets/usa-flag.svg'

import './HeaderTitle.css'

const HeaderTitle = () => {
    return (<>
    <div style={{marginTop: '1rem'}} className="HeaderTitleContainer">
        <div style={{float: 'left', marginLeft: '2rem'}}>
            <h6>MY FACE SCREEN</h6>
        </div>

        <div style={{float: 'right', marginRight: '2rem'}}>
            <div style={{display: 'inline-block', verticalAlign: 'middle', paddingRight: '10px'}}>
                <h6>MADE IN AMERICA</h6>
            </div>    
            <div style={{display: 'inline-block', verticalAlign: 'middle'}}>
                <img src={usaflag} style={{width: '35px', height: '35px'}} />
            </div>
        </div>
    </div>

    <hr style={{width: '100%', height: '1px', border: '0', backgroundColor: '#eeeae6', marginTop: '3rem'}}/>




    </>);
}
 
export default HeaderTitle;