import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Navbar from '../../components/Navbar/Navbar'
import HeroImageHome from '../../components/HeroImageHome/HeroImageHome';
import HomeDividerTwo from '../../components/HomeDividerTwo/HomeDividerTwo';
import OrangeBtn from '../../components/OrangeBtn/OrangeBtn'

class Home extends Component {
    state = {  }
    render() { 
        return (<>
            <Header />
            <HeaderTitle />
            <Navbar />
            <HeroImageHome />
            <HomeDividerTwo />
            <OrangeBtn text="Take the Quiz"/>
        </>);
    }
}
 
export default Home;