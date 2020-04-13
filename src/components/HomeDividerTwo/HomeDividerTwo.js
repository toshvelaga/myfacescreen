import React from 'react';
import { Link } from 'react-router-dom';
import flamingofacemask from '../../assets/flamingo-face-mask.png'

const HomeDividerTwo = () => {
    return (<>
    <div>
        <h1 style={{color: '#54453e'}}>Need some recommendations? Easy.</h1>
        <p style={{color: 'gray'}}>Tell us about who you are and we'll create a custom mask for you.</p>
        <img src={ flamingofacemask }/>
    </div>
    </>);
}
 
export default HomeDividerTwo;