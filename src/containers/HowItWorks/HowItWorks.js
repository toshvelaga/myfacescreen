import React, { Component } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Navbar from '../../components/Navbar/Navbar'

class HowItWorks extends Component {
    state = {  }
    render() { 
        return (<>
        <HeaderTitle />
        <Navbar />
        <hr style={{width: '100%', height: '1px', border: '0', backgroundColor: '#eeeae6'}}/>
        <h1>How It Works</h1>
        </>);
    }
}
 
export default HowItWorks;