import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';

class Home extends Component {
    state = {  }
    render() { 
        return (<>
            <Header />
            <HeaderTitle />
            {/* <h1>Home</h1> */}
        </>);
    }
}
 
export default Home;