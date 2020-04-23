import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import Hr from '../../components/Hr/Hr'
import noun_box_2 from '../../assets/noun_box_2.svg'

class Box extends Component {
    state = {  }
    render() { 
        return (<>
        <div>
            <HeaderTitle />
            <Navbar />
            <Hr />
            <img src={noun_box_2} style={{height: '20rem', width: '20rem'}} />
            <h2>Your Box is currently empty.</h2>
        </div>
        </>);
    }
}
 
export default Box;