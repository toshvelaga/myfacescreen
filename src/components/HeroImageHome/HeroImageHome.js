import React from 'react';
import './HeroImageHome.css';
import covidmarried from '../../assets/covid-married.mp4'

import './HeroImageHome.css'

const HeroImageHome = () => {
    return (
        <video style={{width: '100%'}} autoPlay loop muted playsInline>
            <source src={ covidmarried } type="video/mp4" />
        </video>
    );
}
 
export default HeroImageHome;