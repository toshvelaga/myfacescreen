import React from 'react';
import './Navbar.css'
import medicalmask from '../../assets/medical-mask.svg'
import Hamburger from '../Hamburger/Hamburger'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = (props) => {
    return (<>

    <div className="mainNavbar">
        <div><Hamburger /></div>
        <span onClick={props.openNav}>MENU</span>
        <Link to="get-started"><span>GET STARTED</span></Link>
        <span>PRODUCTS</span>
        {/* <span>GIFT</span> */}
        
        <span><img src={medicalmask} style={{width: '4rem', height: '4rem'}}/></span>
        
        <Link to="how-it-works"><span>HOW IT WORKS</span></Link>
        <Link to="login"><span>LOGIN</span></Link>
        <Link to="join"><span>JOIN</span></Link>
        <Link to="box"><span>BOX</span></Link>
    </div>
    </>);
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      openNav: () => dispatch({type: 'OPEN_NAVBAR' }),
    }
}
 
export default connect(null, mapDispatchToProps)(Navbar);