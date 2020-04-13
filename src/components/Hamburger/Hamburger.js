import React, { Component } from 'react';
import './Hamburger.css'

// codepen: https://codepen.io/designcouch/pen/Atyop

class Hamburger extends Component {
    state = { 
        width: '0'
    }
    
    openNav = () => {
        this.setState({width: '250px'})
    }

    closeNav = () => {
        this.setState({width: '0px'})
    }

    render() { 
        return (<>      
            <div id="mySidenav" style={{width: this.state.width}} class="sidenav">
                <a class="closebtn" onClick={this.closeNav}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
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


