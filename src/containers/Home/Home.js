import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Navbar from '../../components/Navbar/Navbar'

class Home extends Component {
    state = {  }
    render() { 
        return (<>
            <Header />
            <HeaderTitle />
            {/* <h1>Home</h1> */}
            <Navbar />
        </>);
    }
}
 
export default Home;