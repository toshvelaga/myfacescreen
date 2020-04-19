import React from 'react';
import facemask_BLACK from '../../../assets/facemask_BLACK.png'
import SquareButton from '../../Buttons/SquareButton/SquareButton'
import { connect } from 'react-redux'

const Fold_1 = (props) => {
    return (
        <div>
            <p>Do you have a selfie ready?<br />This will help us get the right face measurement for your mask.</p>
            <img src={facemask_BLACK} style={{width: '20rem', height: '22rem'}} />
            <p style={{marginTop: '1rem', marginBottom: '1rem'}}>Let's get started.</p>
            <SquareButton fx={props.showFold_2} />
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      showFold_2: () => dispatch({type: 'SHOW_FOLD_2'}),
    }
}
 
export default connect(null, mapDispatchToProps)(Fold_1);