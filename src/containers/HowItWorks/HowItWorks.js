import React, { Component } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Navbar from '../../components/Navbar/Navbar'
import Grid from '@material-ui/core/Grid';
import OrangeButton from '../../components/Buttons/OrangeButton/OrangeButton'
import Hr from '../../components/Hr/Hr'
import Footer from '../../components/Footer/Footer'

import './HowItWorks.css'

class HowItWorks extends Component {
    state = {  }
    render() { 
        return (<>
        <HeaderTitle />
        <Navbar />
        <div className="HowItWorksContainer">
            <Hr />
            <h1 style={{color: '#55473e'}}>How It Works</h1>
            <p style={{color: '#a59b98'}}>Our goal is to craft the highest quality protective face masks<br /> for you and the ones you care about.</p>
            <OrangeButton text="Get Started"/>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <h4>Get Started</h4>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h4>We Got You Covered</h4>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h4>BUT WAIT, THERE'S MORE!</h4>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h4>YOU SAY WHEN</h4>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h4>NO LONG-TERM COMMITMENTS</h4>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h4>30-DAY MONEY BACK GUARANTEE</h4>
                </Grid>
            </Grid>
            <Hr />
            <OrangeButton text="Get Started" />
            <Footer />

        </div>
        </>);
    }
}
 
export default HowItWorks;