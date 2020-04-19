import React from 'react';
import PurpleButton from '../../Buttons/PurpleButton/PurpleButton'
import { connect } from 'react-redux'
import SquareButton from '../../Buttons/SquareButton/SquareButton'

import facemask_BLACK from '../../../assets/facemask_BLACK.png'

const Fold_4 = (props) => {
    return (        
    
    <div style={{display: props.display}} className="part4">
        <div style={{marginTop: '10rem', display: 'inline-block'}}>
            <div style={{float: 'left', marginLeft: '10rem'}}>
                <div>
                    <img src={facemask_BLACK} style={{width: '20rem', height: '22rem'}} />
                </div>
                <span onClick={() => props.showFold_5}>
                    <PurpleButton name="GET THE STARTER PACK" />
                </span>
            </div>

            <div style={{float: 'right', width: '33%', textAlign: 'left', marginRight: '10rem'}}>
                <div>
                    <h4 style={{color: '#6658f5'}}>Great choice, here's what your started set looks like.</h4>
                    <p>Get the perfect introduction of our most popular mask. We will follow that up with our restock box, so you never run out.</p>
                    <p>
                        <span style={{color: '#6658f5'}}><h4>Starter set ships today.</h4></span>
                        <span>Price: $29.99</span>
                    </p>
                    <p>Your masks are one time use and we will ship enough to last you a month. No hidden fees and free shipping.</p>
                    <h4 style={{color: '#6658f5'}}>This box ships every month.<br />Shipping is always free. <br />Cancel anytime.</h4>
                </div>
            </div>
        </div>

        <div style={{marginTop: '5rem'}}>
            <SquareButton fx={() => { props.showFold_5(); props.segment() }} />
        </div>
    </div>

    );
}

const mapStateToProps = (state) => {
    return {
        display: state.foldReducer.Fold_4,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      showFold_5: () => dispatch({type: 'SHOW_FOLD_5'}),
      segment: () => dispatch({type: 'SEGMENT_5'}),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Fold_4);