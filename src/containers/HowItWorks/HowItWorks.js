import React, { Component } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Navbar from '../../components/Navbar/Navbar'
import Grid from '@material-ui/core/Grid';
import OrangeButton from '../../components/Buttons/OrangeButton/OrangeButton'
import Hr from '../../components/Hr/Hr'
import Footer from '../../components/Footer/Footer'

import startflag from '../../assets/HowItWorks/start.svg'
import selfie from '../../assets/HowItWorks/selfie.svg'
import bluemask from '../../assets/HowItWorks/bluemask.svg'
import freedelivery from '../../assets/HowItWorks/freedelivery.svg'  
import mail from '../../assets/HowItWorks/mail.svg'
import shield2 from '../../assets/HowItWorks/shield2.svg'

import { Link } from "react-router-dom"

import './HowItWorks.css'

const styles = {
    width: '7rem',
    height: '7rem'
}

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
            <Link to="get-started">
                <OrangeButton text="Get Started"/>
            </Link>
            <div className="HowItWorks_2">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <img src={startflag} style={styles} />
                        <h4>Get Started</h4>
                        <p>Go to the get started or join page and fill out the form. Filling out the form should take &lt; 10 minutes.</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={selfie} style={styles} />
                        <h4>Upload Image</h4>
                        <p>Use a picture of either yourself or a design that you like to make a customized mask.</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={bluemask} style={styles} />
                        <h4>Customize Your Mask</h4>
                        <p>The only limits are your creativity. Print your mask with your face, your favorite superhero, or even your company.</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={freedelivery} style={styles} />
                        <h4>Get Free Shipping</h4>
                        <p>Get fast and free domestic shipping delivered straight to your doorstep</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={mail} style={styles} />
                        <h4>Email Confirmation</h4>
                        <p>After entering in your shipping information you will recieve an email confirmation about your order.</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={shield2} style={styles} />
                        <h4>Stay Safe</h4>
                        <p>Our masks will keep you and those around you safe.</p>
                    </Grid>
                </Grid>
            </div>

            <Hr />
            <div style={{marginTop: '2rem', marginBottom: '3rem', color: '#a59b98'}}>
                <h3>By now you’re probably convinced<br /> of the wisdom of joining Face Mask Screen</h3>
            <Link to="get-started">
                <OrangeButton text="Get Started"/>
            </Link>
            </div>
            <Footer />

        </div>
        </>);
    }
}
 
export default HowItWorks;