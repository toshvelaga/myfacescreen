import React from 'react';
import PurpleButton from '../../Buttons/PurpleButton/PurpleButton'
import SquareButton from '../../Buttons/SquareButton/SquareButton'
import { connect } from 'react-redux'
import './Fold_3_Selfie.css'
import Cropper from '../../Cropper/Cropper';

const Fold_3_Selfie = (props) => {

    return (<>        
    <div style={{display: props.display}} className="part3">
        <p style={{marginTop: '10rem', marginBottom: '2rem'}}>Let's create your face screen</p>
        <div style={{width: 'auto', height: '250px', display: 'inline-block'}}>
            <Cropper label="Upload my face" />            
        </div>

        <p>Don't like your selfie?<br />Try again.</p>
        <PurpleButton name="Click to add another member" />
        <div style={{marginTop: '2rem'}}>
            <SquareButton fx={props.showFold_4} />
        </div>
    </div>
    </>);
}

const mapStateToProps = (state) => {
    return {
        display: state.foldReducer.Fold_3,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      showFold_4: () => dispatch({type: 'SHOW_FOLD_4'}),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Fold_3_Selfie);