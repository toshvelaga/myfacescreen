import React, { Component } from 'react';
import './Hamburger.css'
import { Link } from 'react-router-dom';

// codepen: https://codepen.io/designcouch/pen/Atyop

class Hamburger extends Component {
    state = { 
        width: '0'
    }
    
    openNav = () => {
        this.setState({width: '335px'})
    }

    closeNav = () => {
        this.setState({width: '0px'})
    }

    render() { 
        return (<>      
            <div id="mySidenav" style={{width: this.state.width}} class="sidenav">
                <a class="closebtn" onClick={this.closeNav}>&times;</a>
                <Link to="/home">HOME</Link>
                <Link to="/get-started">GET STARTED</Link>
                <Link to="products">OUR PRODUCTS</Link>
                <Link to="/gift">GIFT THE MASK</Link>
            </div>

            <div id="nav-icon1" onClick={this.openNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
    </>);
    }
}
 
export default Hamburger;


