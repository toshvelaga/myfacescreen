import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import FemaleFaceMask from '../../assets/Products/FemaleFaceMask.jpg'
import GiantsMask from '../../assets/Products/GiantsMask.jpg'
import ManWoman from '../../assets/Products/ManWoman.jpg'

class CarouselHome extends Component {
    state = {  }
    render() { 
        return (            
            <Carousel showStatus={false}>
                <div>
                    <img src={FemaleFaceMask} />
                    <p className="legend">Get a mask with you face on it</p>
                </div>
                <div>
                    <img src={GiantsMask} />
                    <p className="legend">Or your favorite sports team</p>
                </div>
                <div>
                    <img src={ManWoman} />
                    <p className="legend">Or celebrate the most important moments in your life</p>
                </div>
            </Carousel>
        );
    }
}
 
export default CarouselHome;