import React from 'react';
import { Link } from 'react-router-dom';
import GSWMask from '../../assets/Home/GSWMask.jpg'

import './HomeDividerTwo.css'

const HomeDividerTwo = () => {
    return (<>
    <div className="HomeDividerTwo">
        <h1 style={{color: '#54453e'}}>Need some recommendations? Easy.</h1>
        <p style={{color: 'gray'}}>Tell us about who you are and we'll create a custom mask for you.</p>
        <img src={ GSWMask }/>
    </div>
    </>);
}
 
export default HomeDividerTwo;