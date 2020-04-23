import React, { Component } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

class Products extends Component {
    state = {  }
    render() { 
        return (<>
        <HeaderTitle />
        <Navbar />
        <p>THIS THE PRODUCTS PAGE</p>
        <div style={{marginTop: '20rem'}}>
        <Footer />
        </div>
        </>)
    }
}
 
export default Products;