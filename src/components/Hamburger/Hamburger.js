import React from 'react';
import ReactDOM from 'react-dom';
import './Hamburger.css'

// codepen: https://codepen.io/designcouch/pen/Atyop


const Hamburger = () => {

    const openNav = () => {
        // const element = document.getElementById('mySidenav')
        // ReactDOM.findDOMNode(element).style.width = "250px";
        alert('hello')
    }

    return (<>
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>

        <div id="nav-icon1" onClick={openNav}>
            <span></span>
            <span></span>
            <span></span>
        </div>
  </>);
}
 
export default Hamburger;