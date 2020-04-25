import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Navbar from '../../components/Navbar/Navbar'
import HeroImageHome from '../../components/HeroImageHome/HeroImageHome';
import HomeDividerTwo from '../../components/HomeDividerTwo/HomeDividerTwo';
import OrangeButton from '../../components/Buttons/OrangeButton/OrangeButton'
import GreyBtn from '../../components/Buttons/GreyButton/GreyButton';
import Footer from '../../components/Footer/Footer';

import { Link } from 'react-router-dom'

class Home extends Component {
    state = {  }
    render() { 
        return (<>
            <Header />
            <HeaderTitle />
            <Navbar />
            <HeroImageHome />
            <HomeDividerTwo />
            <Link to="get-started">
                <span style={{marginRight: '.8rem'}}>
                    <OrangeButton text="Get Started"/>
                </span>
            </Link>
            <Link to="products">
                <span style={{marginLeft: '.8rem'}}>
                    <GreyBtn text="See Products" />
                </span>
            </Link>
            <div style={{marginTop: '5rem'}}>
                <Footer />
            </div>
        </>);
    }
}
 
export default Home;