import React, { Component } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import femalemask from '../../assets/Products/FemaleFaceMask.jpg'
import giantsmask from '../../assets/Products/GiantsMask.jpg'
import xMenMask from '../../assets/Products/xMenMask.jpg'
import ManWoman from '../../assets/Products/ManWoman.jpg'
import OrangeButton from '../../components/Buttons/OrangeButton/OrangeButton';
import { Link } from 'react-router-dom'
import './Products.css'

class Products extends Component {
    state = {  }
    render() { 
        return (<>
        <HeaderTitle />
        <Navbar />
        <div className="Products">
            <h1 style={{color: '#55473e'}}>Personal</h1>
            <img src={femalemask} />
            <p style={{color: '#a59b98'}}>Get a mask made with your face on it for personal everyday use.</p>

            <div style={{marginTop: '2rem', marginBottom: '5rem'}}>
                <Link to="get-started">
                    <OrangeButton text="Get Started"/>
                </Link>
            </div>
            
            <h1 style={{color: '#55473e'}}>Business</h1>
            <img src={giantsmask} />
            <p style={{color: '#a59b98'}}>Use your company logo to give out masks to your employees. This helps keep them safe and allows your employees to rock their corporate swag.</p>

            <div style={{marginTop: '2rem', marginBottom: '5rem'}}>
                <Link to="get-started">
                    <OrangeButton text="Get Started"/>
                </Link>
            </div>

            <h1 style={{color: '#55473e'}}>Kids</h1>
            <img src={xMenMask} />
            <p style={{color: '#a59b98'}}>Keep your kids safe with personalized masks printed with their favorite logos. Choose a superhero or whatever image your kids wants.</p>

            <div style={{marginTop: '2rem', marginBottom: '5rem'}}>
                <Link to="get-started">
                    <OrangeButton text="Get Started"/>
                </Link>
            </div>

            <h1 style={{color: '#55473e'}}>Families</h1>
            <img src={ManWoman} />
            <p style={{color: '#a59b98'}}>Print multiple masks with different images that keep your family close to heart</p>
            
            <div style={{marginTop: '2rem'}}>
                <Link to="get-started">
                    <OrangeButton text="Get Started"/>
                </Link>
            </div>

            <div style={{marginTop: '5rem'}}>
                <Footer />
            </div>
        </div>
        </>)
    }
}
 
export default Products;