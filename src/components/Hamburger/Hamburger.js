import React, { Component } from 'react';
import './Hamburger.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

// codepen: https://codepen.io/designcouch/pen/Atyop

const Hamburger = (props) => {

    return (<>
    <div id="mySidenav" style={{width: props.width}} class="sidenav">
        <a class="closebtn" onClick={props.closeNav}>&times;</a>
        <Link to="/home">HOME</Link>
        <Link to="/get-started">GET STARTED</Link>
        <Link to="products">OUR PRODUCTS</Link>
        <Link to="/gift">GIFT THE MASK</Link>
    </div>

    <div id="nav-icon1" onClick={props.openNav}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    </>);
}

const mapStateToProps = (state) => {
    return {
        width: state.navbarReducer.width
    }
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      openNav: () => dispatch({type: 'OPEN_NAVBAR' }),
      closeNav: () => dispatch({type: 'CLOSE_NAVBAR'})
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);



