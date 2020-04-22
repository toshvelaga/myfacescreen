import React, { Component } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Navbar from '../../components/Navbar/Navbar'
import Grid from '@material-ui/core/Grid';
import OrangeButton from '../../components/Buttons/OrangeButton/OrangeButton'

class HowItWorks extends Component {
    state = {  }
    render() { 
        return (<>
        <HeaderTitle />
        <Navbar />
        <hr style={{width: '100%', height: '1px', border: '0', backgroundColor: '#eeeae6'}}/>
        <h1 style={{color: '#55473e'}}>How It Works</h1>
        <p style={{color: '#a59b98'}}>Our goal is to craft the highest quality protective face masks<br /> for you and the ones you care about.</p>
        <OrangeButton text="Get Started"/>
        </>);
    }
}
 
export default HowItWorks;