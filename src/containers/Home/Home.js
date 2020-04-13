import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Navbar from '../../components/Navbar/Navbar'
import HeroImageHome from '../../components/HeroImageHome/HeroImageHome';
import HomeDividerTwo from '../../components/HomeDividerTwo/HomeDividerTwo';
import OrangeBtn from '../../components/OrangeBtn/OrangeBtn'
import GreyBtn from '../../components/GreyBtn/GreyBtn';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
    state = {  }
    render() { 
        return (<>
            <Header />
            <HeaderTitle />
            <Navbar />
            <HeroImageHome />
            <HomeDividerTwo />
            <span style={{marginRight: '.8rem'}}>
                <OrangeBtn text="Take the Quiz"/>
            </span>
            <span style={{marginLeft: '.8rem'}}>
                <GreyBtn text="See Trending" />
            </span>
            <Footer />
        </>);
    }
}
 
export default Home;