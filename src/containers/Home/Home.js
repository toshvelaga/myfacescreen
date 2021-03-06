import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Navbar from '../../components/Navbar/Navbar'
import HomeDividerTwo from '../../components/HomeDividerTwo/HomeDividerTwo';
import OrangeButton from '../../components/Buttons/OrangeButton/OrangeButton'
import GreyBtn from '../../components/Buttons/GreyButton/GreyButton';
import Footer from '../../components/Footer/Footer';
import CarouselHome from '../../components/Carousel/Carousel';

import { Link } from 'react-router-dom'

import './Home.css'

class Home extends Component {
    state = {  }
    render() { 
        return (<>
            {/* <Header /> */}
            <HeaderTitle />
            <Navbar />
            <CarouselHome />
            {/* <HeroImageHome /> */}
            <HomeDividerTwo />
            <Link to="get-started">
                <span style={{marginRight: '.8rem'}}>
                    <OrangeButton text="Get Started"/>
                </span>
            </Link>
            <Link to="products">
                <span className="GreyBtnHome" style={{marginLeft: '.8rem'}}>
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