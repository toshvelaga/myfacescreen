import React from 'react';
import './Navbar.css'
import medicalmask from '../../assets/medical-mask.svg'
import Hamburger from '../Hamburger/Hamburger'

const Navbar = () => {
    return (<>

    <div className="mainNavbar">
        <div><Hamburger /></div>
        <span>MENU</span>
        <span>GET STARTED</span>
        <span>PRODUCTS</span>
        <span>GIFT</span>
        
        <span><img src={medicalmask} style={{width: '4rem', height: '4rem'}}/></span>
        
        <span>HOW IT WORKS</span>
        <span>LOGIN</span>
        <span>JOIN</span>
        <span>BOX</span>
    </div>
    </>);
}
 
export default Navbar;