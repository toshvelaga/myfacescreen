import React from 'react';
import PurpleButton from '../../Buttons/PurpleButton/PurpleButton'
import { connect } from 'react-redux'
import SquareButton from '../../Buttons/SquareButton/SquareButton'
import Typography from '@material-ui/core/Typography';

import facemask_BLACK from '../../../assets/facemask_BLACK.png'

const Fold_4 = (props) => {
    return (        

    //     <Typography style={{marginBottom: '1rem'}} component="h1" variant="h6">
    //     CREATE YOUR ACCOUNT
    //   </Typography>
    
    <div style={{display: props.display}} className="part4">
        <div style={{marginTop: '10rem', display: 'inline-block'}}>
            {/* <div style={{float: 'left', marginLeft: '10rem'}}>
                <div>
                    <img src={facemask_BLACK} style={{width: '20rem', height: '22rem'}} />
                </div>
                <span onClick={() => props.showFold_5}>
                    <PurpleButton name="GET THE STARTER PACK" />
                </span>
            </div> */}

            <div style={{display: 'inline-block', width: '60%', textAlign: 'left', border: '2px solid #1aae9e', borderRadius: '5px', padding: '3rem' }}>
                <div>
                    <Typography style={{color: '#6658f5'}} component="h1" variant="h6">Great choice, here's what your started set looks like.</Typography>
                    <p>Get the perfect introduction of our most popular mask. We will follow that up with our restock box, so you never run out.</p>
                    
                    <Typography style={{color: '#6658f5'}} component="h1" variant="h6">Starter set ships today.</Typography>
                    <p>Estimated Price: $29.99</p>
                    
                    <p>Your masks are one time use and we will ship enough to last you a month. No hidden fees and free shipping.</p>
                    <Typography style={{color: '#6658f5'}} component="h1" variant="h6">This box ships every month. Shipping is always free. Cancel anytime.</Typography>
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