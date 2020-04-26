import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import Hr from '../../components/Hr/Hr'
import BrownBox from '../../assets/BrownBox.svg'
import { Link } from 'react-router-dom'

class Box extends Component {
    state = {  }
    render() { 
        return (<>
        <div>
            <HeaderTitle />
            <Navbar />
            <Hr />
            <img src={BrownBox} style={{height: '20rem', width: '20rem', marginTop: '2rem'}} />
            <h2 style={{color: '#55473e'}}>Your Box is currently empty.</h2>
            <Link to="/get-started" style={{textDecoration: 'none', color: '#0378d8'}}><p>Let's Get Started to change that.</p></Link>
        </div>
        </>);
    }
}
 
export default Box;