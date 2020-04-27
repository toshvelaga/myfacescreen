import React from 'react';
// import facemask_BLACK from '../../../assets/facemask_BLACK.png'
import SquareButton from '../../Buttons/SquareButton/SquareButton'
import whitefacemask from '../../../assets/GetStarted/whitefacemask.jpg'
import { connect } from 'react-redux'

import './Fold_1.css'

const Fold_1 = (props) => {
    return (

        // color: '#54453e'
        // color: 'gray'

        <div className="Fold_1">
            <p style={{width: '60%', display: 'inline-block'}}>We start with a blank white mask and let you choose an image to print over it. After you fill out your contact info we will get in touch with you. The whole proccess should take less than 10 minutes. Let's get started.</p>
            <img src={whitefacemask} style={{width: '80%', height: 'auto'}} />
            <p style={{marginTop: '1rem', marginBottom: '1rem'}}></p>
            <SquareButton fx={() => { props.showFold_2(); props.segment() }} />
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      showFold_2: () => dispatch({type: 'SHOW_FOLD_2'}),
      segment: () => dispatch({type: 'SEGMENT_2'})
    }
}
 
export default connect(null, mapDispatchToProps)(Fold_1);