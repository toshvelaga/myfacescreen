import React from 'react';
import usaflag from '../../assets/usa-flag.svg'

const HeaderTitle = () => {
    return (<>
    <div className="HeaderTitleContainer">
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
    </>);
}
 
export default HeaderTitle;