import React from 'react';
import './Navbar.css'
import medicalmask from '../../assets/medical-mask.svg'
import Hamburger from '../Hamburger/Hamburger'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import box from '../../assets/box.svg'
import box_2 from '../../assets/open-box-2.svg'

const Navbar = (props) => {
    return (<>

    <div className="mainNavbar">
        <div><Hamburger /></div>
        <span onClick={props.openNav}>MENU</span>
        <Link to="get-started"><span>GET STARTED</span></Link>
        <Link to="how-it-works"><span>HOW IT WORKS</span></Link>

        {/* <span>GIFT</span> */}
        
        <span><img src={medicalmask} style={{width: '4rem', height: '4rem'}}/></span>
        
        <Link to="products"><span>PRODUCTS</span></Link>
        <Link to="login"><span>LOGIN</span></Link>
        <Link to="join"><span>JOIN</span></Link>
        <Link to="box"><span>BOX</span></Link>
        <Link to="box"><span><img src={box} style={{width: '3rem', height: '3rem', marginLeft: '0rem'}} /></span></Link>
    </div>

    <div className="mainNavbarSmallScreen">
        <div style={{float: 'left'}}><Hamburger /></div>
        <span style={{float: 'right', marginRight: '1rem'}}><img src={box} style={{width: '3rem', height: '3rem', marginLeft: '0rem'}} /></span>
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